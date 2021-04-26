import jwt from "jsonwebtoken";
import type { NextApiRequest, NextApiResponse } from "next";

const secret = process.env.SECRET;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = req.cookies[process.env.NEXT_PUBLIC_COOKIE_TOKEN];
  if (!session) return res.json(JSON.stringify(null));

  const token = await jwt.verify(session, secret, { algorithms: ["HS256"] });

  res.send(JSON.stringify(token, null, 2));
};
