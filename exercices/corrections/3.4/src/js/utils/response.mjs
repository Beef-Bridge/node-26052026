import { createReadStream, access, constants } from "node:fs";
import { join } from "node:path";
import { paths } from "./paths.mjs";
import { pipeline } from "node:stream";
const { pages, pagesBonus } = paths;
/**
 * Server response
 * @param {string} filename path to HTML file
 * @param {Object} res  object Response from node:https
 * @param {Object} headers objet HTTP headers
 * @returns void
 */
export const render = (filename, res, headers = {}) => {
  const pg = /bonus\.mjs/.test(process.argv[1]) ? pagesBonus : pages;
  const PAGE_404 = join(pg, "404.html");
  /**
   * access() permet de vérifier que le fichier existe avec des droits d'accès
   */
  access(filename, constants.F_OK, (error) => {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/html" });
      // Connexion du stream de lecture (lecture page HTML) avec le stream d'écriture (objet Response de type stream.writable)
      createReadStream(PAGE_404).pipe(res);
    } else {
      res.writeHead(200, headers);
      createReadStream(filename).pipe(res);
    }
  });
};

export const renderPromisify = async (res, page, status = 200) => {
  // Transforme l'implémentation de la callback de pipeline() en promesse
  const pipelineAsync = promisify(pipeline);
  res.writeHead(status, { "Content-Type": "text/html; charset=utf-8" });
  return pipelineAsync(createReadStream(page), res)
  .catch((err) => {
    error(`Erreur sur la page ${page}:`, err);
    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Internal Server Error");
  });
};
