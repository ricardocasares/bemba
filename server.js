let next = require("next");
let polka = require("polka");
let { join } = require("path");
let dir = join(__dirname, "static");
let static = require("serve-static")(dir);
const { NODE_ENV, PORT = 3000 } = process.env;

let dev = NODE_ENV !== "production";
let app = next({ dev });
let handle = app.getRequestHandler();
let render = name => (req, res) =>
  app.render(req, res, name, { ...req.query, ...req.params });

app.prepare().then(() =>
  polka()
    .use(static)
    .get("/", render("/"))
    .get("/search", render("/search"))
    .get("/library", render("/library"))
    .get("/settings", render("/settings"))
    .get("/:filter/:name", render("/stations"))
    .get("*", (req, res) => handle(req, res))
    .listen(PORT)
    .then(() => console.log(`> Server ready`))
);
