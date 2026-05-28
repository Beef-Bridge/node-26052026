import { fileURLToPath } from "node:url";
import { resolve, join, dirname } from "node:path";
export const paths = {
  src: resolve(dirname(fileURLToPath(import.meta.url)), "..", ".."),
  pages: join(this.src, "pages"),
  pagesBonus: join(this.src, "pages-bonus"),
  config: join(this.src, "..", "config"),
  assets: join(this.src, "..", "assets"),
  css: join(this.assets, "css"),
  img: join(this.assets, "img"),
};
