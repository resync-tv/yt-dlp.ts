<h1 align="center">yt-dl</h1>

<p align="center"><i>a wrapper for various youtube downloading solutions</i><p>

<h2 align="center">synopsis</h2>

There are many solutions to programmatically download a YouTube video, but all of them are flawed in some way or another.

First there was [youtube-dl](https://github.com/ytdl-org/youtube-dl) which is perhaps the oldest and most popular tool. Then I discovered [ytdl-core](https://github.com/fent/node-ytdl-core) which is written in JavaScript and seems to be faster than [youtube-dl](https://github.com/ytdl-org/youtube-dl), but also rather slow to update to YouTube's changes. And not too long ago I stumbled across [yt-dlp](https://github.com/yt-dlp/yt-dlp), which is a fork of [youtube-dl](https://github.com/ytdl-org/youtube-dl) with various improvements and seemingly faster updates.

So I thought: This is a mess and most people shouldn't have to worry about which downloader is working under the hood to get their video, so I'm building this adapter to unify all of them somewhat.

This probably won't be feature-complete and rather will be focused on the core use of a YouTube downloader, which is to get URLs for streams and some metadata about the content. But it will be a solid base to build upon if you need any more features, so feel free to fork and send a PR.

<h2 align="center">technical details</h2>

This library is primarely modeled around [ytdl-core](https://github.com/fent/node-ytdl-core) because that's what [resync](https://github.com/resync-tv/resync) was based on initially.