import type { ytdl } from "../types"

import ytdlcore from "./ytdl-core"
export const adapters = { ytdlcore }

export default class YTDL {
  constructor(public adapters: ytdl.ytdlAdapter[]) {}

  getInfo: ytdl.ytdlAdapter = async url => {
    const adapters = [...this.adapters]

    while (adapters.length) {
      const adapter = adapters.shift()
      if (!adapter) throw "no adapter could resolve video info"

      const data = await adapter(url)
      if (data) return data
    }

    throw "no adapter could resolve video info"
  }
}
