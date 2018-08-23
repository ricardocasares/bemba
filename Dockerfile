FROM mhart/alpine-node:latest AS build
WORKDIR /build
COPY package.json package-lock.json /build/
RUN npm ci
ADD . /build
ARG BEMBA_API_ENDPOINT
RUN npm run build

FROM mhart/alpine-node:base
WORKDIR /app
ENV NODE_ENV="production"
COPY --from=build /build .
CMD node server.js