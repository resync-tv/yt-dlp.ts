import type { ytdl } from "../types"
import type { Video } from "../types/yt-dlp"

import execa from "execa"
import ensureBinaries from "./ensureBinaries"

export default class YTDLP {
  constructor(public binPath?: string) {}

  getInfo: ytdl.ytdlAdapter = async url => {
    if (!this.binPath) this.binPath = await ensureBinaries()
    const { stdout } = await execa(this.binPath, ["-J", url])
    const data = JSON.parse(stdout) as Video

    const transformedData: ytdl.ytdlInfo = {
      videoDetails: {
        title: data.title,
        description: data.description,
        lengthSeconds: data.duration.toString(),
        videoId: data.id,
        published: parseInt(data.upload_date),
        author: {
          name: data.uploader ?? data.channel,
          channel_url: data.uploader_url ?? data.channel_url,
        },
      },
      formats: data.formats.map(
        (format): ytdl.transformedVideoFormat => ({
          url: format.url,
          hasAudio: format.acodec !== "none",
          hasVideo: format.vcodec !== "none",
          height: format.height ?? undefined,
          width: format.width ?? undefined,
          quality: format.format_note,
          audioBitrate: format.asr ?? undefined,
        })
      ),
    }
    return transformedData
  }
}
