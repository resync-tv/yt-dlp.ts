import type internal from "node:stream"
import type { YtDLP } from "../types/yt-dlp"
export type * as YtDLP from "../types/yt-dlp"

import { execa } from "execa"

export const getInfo = async (url: string, extraFlags: string[] = []) => {
  const process = await execa("yt-dlp", ["-J", ...extraFlags, url])
  const data: YtDLP = JSON.parse(process.stdout)

  return data
}

type GuaranteedStdio = {
  stdin: internal.Writable
  stdout: internal.Readable
  stderr: internal.Readable
}
/**
 * @deprecated Use `downloadFromInfo` with destination `"-"` instead
 */
export const streamFromInfo = (info: YtDLP, extraFlags: string[] = []) => {
  return downloadFromInfo(info, "-", extraFlags)
}

export const downloadFromInfo = async (
  info: YtDLP,
  destination: string,
  extraFlags: string[] = []
) => {
  const infoString = JSON.stringify(info)
  const process = execa("yt-dlp", [
    ...extraFlags,
    "-o",
    destination,
    "--load-info-json",
    "-",
  ])

  if (!process.stdin) throw new Error("No yt-dlp stdin")
  if (!process.stdout) throw new Error("No yt-dlp stdout")
  if (!process.stderr) throw new Error("No yt-dlp stderr")

  process.stdin.write(infoString)
  process.stdin.end()

  return process as typeof process & GuaranteedStdio
}

export const updateYTDLP = async (channel?: string) => {
  const extraFlags: string[] = []
  if (channel) {
    extraFlags.push("--update-to", channel)
  }

  const result = await execa("yt-dlp", ["--update", ...extraFlags])
  return result
}
