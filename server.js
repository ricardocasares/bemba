const next = require("next");
const express = require("express");
const { join } = require("path");
const { parse } = require("url");
const static = require("serve-static");

const { NODE_ENV, PORT = 3000 } = process.env;
const dir = join(__dirname, "static");
const dev = NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const render = name => (req, res) =>
  app.render(req, res, name, { ...req.query, ...req.params });

app.prepare().then(() =>
  express()
    .use(static(dir))
    .get("/", render("/"))
    .get("/search", render("/search"))
    .get("/library", render("/library"))
    .get("/settings", render("/settings"))
    .get("/:filter/:name", render("/stations"))
    .get("/stations/:filter/:name", (req, res) => {
      const { filter, name } = req.params;
      res.redirect(301, `/${filter}/${name}`);
    })
    .get("*", (req, res) => handle(req, res))
    .listen(PORT, () => console.log(`> Server ready`))
);
