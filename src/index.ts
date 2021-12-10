import type { ytdl } from "../types"
export { ytdl }

import any from "promise.any"

import ytdlcore from "./ytdl-core"
import ytdlp from "./yt-dlp"
export const adapters = { ytdlcore, ytdlp }

import debug from "./debug"
const log = debug("main")

export type ResolveStrategy = "fallback" | "first-to-resolve"
export default class YTDL {
  constructor(
    public adapters: ytdl.ytdlAdapter[],
    public strategy: ResolveStrategy = "fallback"
  ) {}

  getInfo: ytdl.ytdlAdapter = async url => {
    if (this.strategy === "fallback") {
      const fallbacks = [...this.adapters]

      while (fallbacks.length) {
        const adapter = fallbacks.shift()
        if (!adapter) throw "no adapter could resolve video info"

        try {
          const data = await adapter(url)
          if (data) return data
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
