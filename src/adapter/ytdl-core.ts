import ytdlcore from "ytdl-core"
import type { yt_dl } from ".."

import debug from "../debug"
const log = debug("ytdl-core")

const adapter: yt_dl.Adapter = url => {
  log(`getInfo(${url})`)
  return ytdlcore.getInfo(url)
}

export default adapter
