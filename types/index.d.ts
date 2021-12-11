import type { Merge, PartialDeep } from "type-fest"

import type { videoInfo as _videoInfo, videoFormat, MoreVideoDetails, Author } from "ytdl-core"

import _YTDLP from "../src/adapter/yt-dlp"

export type YTDLP = _YTDLP

type _EnsuredFormatProps = {
  url: string
  hasAudio: boolean
  hasVideo: boolean
  quality: string
  audioBitrate?: number
}

export type EnsuredVideoFormat = Merge<PartialDeep<videoFormat>, _EnsuredFormatProps>

export type EnsuredAuthor = {
  name: string
  channel_url: string
}

export type EnsuredMoreVideoDetails = {
  title: string
  description: string | null
  lengthSeconds: string
  author: Partial<Author> & EnsuredAuthor
  videoId: string
}

export type EnsuredInfo = {
  formats: EnsuredVideoFormat[]
  videoDetails: Merge<PartialDeep<MoreVideoDetails>, EnsuredMoreVideoDetails>
}

/**
 * roughly equivalent to the ytdl-core `videoInfo` type
 * but only includes the most crucial properties
 */
export type VideoInfo = Merge<PartialDeep<_videoInfo>, EnsuredInfo>

export type Adapter = (url: string) => Promise<VideoInfo>
