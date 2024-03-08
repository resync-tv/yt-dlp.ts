import type { YtDLP } from "../types/yt-dlp"
export type * from "../types/yt-dlp"

import { execa } from "execa"

export const getInfo = async (url: string, extraFlags: string[] = []) => {
  const process = await execa("yt-dlp", ["-J", ...extraFlags, url])
  const data: YtDLP = JSON.parse(process.stdout)

  return data
}
