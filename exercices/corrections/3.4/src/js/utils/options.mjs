import { resolve } from 'node:path'
import { readFileSync } from 'node:fs'
import { paths } from './paths.mjs'
const { config } = paths
export const options = {
  key: readFileSync(resolve(config, "private.pem")),
  cert: readFileSync(resolve(config, "certificate.crt")),
  agent: false,
  path: "/",
};