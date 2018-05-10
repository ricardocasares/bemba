const next = require("next");
const polka = require("polka");
const { NODE_ENV, PORT = 3000 } = process.env;

const dev = NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const render = name => (req, res) =>
  app.render(req, res, name, { ...req.query, ...req.params });

app.prepare().then(() =>
  polka()
    .get("/", render("/"))
    .get("/search", render("/search"))
    .get("/library", render("/library"))
    .get("/settings", render("/settings"))
    .get("/stations/:filter/:name", render("/stations"))
    .get("*", (req, res) => handle(req, res))
    .listen(PORT)
    .then(() => console.log(`> Server ready`))
);
