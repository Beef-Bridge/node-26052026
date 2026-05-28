import { createServer } from "node:https";
import { createReadStream } from "node:fs";
import { info, error } from "node:console";
import { pipeline } from "node:stream";
import { promisify } from "node:util";
import { options } from "./utils/options.mjs";
import { paths } from "./utils/paths.mjs";
import { renderPromisify, render } from "./utils/response.mjs";
const { pages } = paths;
const PORT = 8034;
createServer(options, (req, res) => {
  const { url, method } = req
  if (method.toUpperCase() === 'GET' && url === "/") {
      render(res, `${pages}/index.html`)
  } else {
    renderPromisify(res, `${pages}/404.html`, 404)
  }
}).listen(PORT, () => {
  info(`Listen on https://localhost:${PORT}`);
});
