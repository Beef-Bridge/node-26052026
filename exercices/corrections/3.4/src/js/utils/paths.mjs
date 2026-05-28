import { fileURLToPath } from "node:url";
import { resolve, join, dirname } from "node:path";
const src = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..")
const assets = join(src, "..", "assets")
export const paths = {
  src,
  assets,
  pages: join(src, "pages"),
  pagesBonus: join(src, "pages-bonus"),
  config: join(src, "..", "config"),
  css: join(assets, "css"),
  img: join(assets, "img"),
};
