import ytdlcore from "ytdl-core"
import type { ytdl } from "../types"

import debug from "./debug"
const log = debug("ytdl-core")

const adapter: ytdl.ytdlAdapter = url => {
  log(`getInfo(${url})`)
  return ytdlcore.getInfo(url)
}

export default adapter
