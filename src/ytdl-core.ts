import ytdlcore from "ytdl-core"
import type { ytdl } from "../types"

const adapter: ytdl.ytdlAdapter = ytdlcore.getInfo

export default adapter
