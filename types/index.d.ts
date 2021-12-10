import type { PartialDeep } from "type-fest"

import type { videoInfo, videoFormat, MoreVideoDetails, Author } from "ytdl-core"

export namespace ytdl {
  type EnsuredVideoFormat = {
    url: string
    hasAudio: boolean
    hasVideo: boolean
    quality: string
    audioBitrate?: number
  }

  type EnsuredAuthor = {
    name: string
    channel_url: string
  }

  type EnsuredMoreVideoDetails = {
    title: string
    description: string | null
    lengthSeconds: string
    author: Partial<Author> & EnsuredAuthor
    videoId: string
  }

  type transformedVideoFormat = Partial<videoFormat> & EnsuredVideoFormat

  type ensuredInfo = {
    formats: transformedVideoFormat[]
    videoDetails: PartialDeep<MoreVideoDetails> & EnsuredMoreVideoDetails
  }

  /**
   * roughly equivalent to the ytdl-core `videoInfo` type
   * but only includes the most crucial properties
   */
  export type ytdlInfo = PartialDeep<videoInfo> & ensuredInfo

  export type ytdlAdapter = (url: string) => Promise<ytdlInfo>
}
