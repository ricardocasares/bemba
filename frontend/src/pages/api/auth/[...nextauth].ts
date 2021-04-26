import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import jwt from "jsonwebtoken";
import { JWT } from "next-auth/jwt";
import { client } from "@/graphql/server";

export default NextAuth({
  cookies: {
    sessionToken: {
      name: process.env.NEXT_PUBLIC_COOKIE_TOKEN,
      options: { httpOnly: true, sameSite: "lax", path: "/", secure: true },
    },
    callbackUrl: {
      name: process.env.NEXT_PUBLIC_COOKIE_CALLBACK,
      options: { httpOnly: true, sameSite: "lax", path: "/", secure: true },
    },
    csrfToken: {
      name: process.env.NEXT_PUBLIC_COOKIE_CSRF,
      options: { httpOnly: true, sameSite: "lax", path: "/", secure: true },
    },
  },
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  secret: process.env.SECRET,

  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.SECRET,
    encode: async ({ secret, token }) => {
      const jwtClaims = {
        sub: token.sub,
        name: token.name,
        email: token.email,
        picture: token.picture,
        iat: Date.now() / 1000,
        exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
        "https://hasura.io/jwt/claims": {
          "x-hasura-allowed-roles": ["user"],
          "x-hasura-default-role": "user",
          "x-hasura-role": "user",
          "x-hasura-user-id": token.sub,
        },
      };
      const encodedToken = jwt.sign(jwtClaims, secret, { algorithm: "HS256" });
      return encodedToken;
    },
    decode: async ({ secret, token }) => {
      const decodedToken = jwt.verify(token, secret, { algorithms: ["HS256"] });
      return decodedToken as JWT;
    },
  },

  callbacks: {
    async session(session, token) {
      const encodedToken = jwt.sign(token, process.env.SECRET, {
        algorithm: "HS256",
      });
      session.token = encodedToken;
      return Promise.resolve(session);
    },
    async jwt(token, user, account, profile, isNewUser) {
      if (user) {
        token.sub = `${account.provider}:${account.id}`;
        await client.chain.mutation
          .insert_user_one({
            object: {
              id: token.sub,
              name: user.name,
              email: user.email,
              avatarUrl: user.image,
            },
            on_conflict: {
              constraint: "user_email_key",
              update_columns: ["name", "avatarUrl"],
            },
          })
          .get({ name: true })
          .catch(console.error);
      }

      return Promise.resolve(token);
    },
  },

  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: {},

  // Enable debug messages in the console if you are having problems
  debug: true,
});
