import ytdlcore from "ytdl-core"
import type { ytdlAdapter } from "../types"

import debug from "./debug"
const log = debug("ytdl-core")

const adapter: ytdlAdapter = url => {
  log(`getInfo(${url})`)
  return ytdlcore.getInfo(url)
}

export default adapter
