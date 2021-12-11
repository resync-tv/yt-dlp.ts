import type * as yt_dl from "../types"
export { yt_dl }

import any from "promise.any"

import ytdl_core from "./adapter/ytdl-core"
import ytdlp from "./adapter/yt-dlp"
export const adapters = { ytdlcore: ytdl_core, ytdlp }

import debug from "./debug"
const log = debug("main")

export type ResolveStrategy = "fallback" | "first-to-resolve"
export default class YTDL {
  constructor(
    public adapters: yt_dl.Adapter[],
    public strategy: ResolveStrategy = "fallback"
  ) {}

  getInfo: yt_dl.Adapter = async url => {
    if (this.strategy === "fallback") {
      const fallbacks = [...this.adapters]

      while (fallbacks.length) {
        const adapter = fallbacks.shift()
        if (!adapter) throw "no adapter could resolve video info"

        try {
          const data = await adapter(url)
          if (data) {
            log(`${adapter.name} resolved video info`)
            return data
          }
        } catch (error) {
          log(`${adapter.name} failed to resolve video info: ${error}`)
        }
      }
    } else if (this.strategy === "first-to-resolve") {
      const promises = this.adapters.map(adapter => adapter(url))
      const data = await any(promises)
      if (data) return data
    }

    throw "no adapter could resolve video info"
  }
}
