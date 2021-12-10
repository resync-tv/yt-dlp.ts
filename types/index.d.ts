import type { PartialDeep } from "type-fest"

import type { videoInfo, videoFormat, MoreVideoDetails, Author } from "ytdl-core"

export type EnsuredVideoFormat = PartialDeep<videoFormat> & {
  url: string
  hasAudio: boolean
  hasVideo: boolean
  quality: string
  audioBitrate?: number
}

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
  videoDetails: PartialDeep<MoreVideoDetails> & EnsuredMoreVideoDetails
}

/**
 * roughly equivalent to the ytdl-core `videoInfo` type
 * but only includes the most crucial properties
 */
export type ytdlInfo = PartialDeep<videoInfo> & EnsuredInfo

export type ytdlAdapter = (url: string) => Promise<ytdlInfo>
