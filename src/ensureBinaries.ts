import { promisify } from "util"
import stream from "stream"
import os from "os"
import { join } from "path"

import jetpack from "fs-jetpack"
import got from "got"
import execa from "execa"

import debug from "./debug"
const log = debug("ensureBinaries")

const YT_DLP_URL_WIN = "https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp.exe"
const YT_DLP_URL_UNIX = "https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp"

const BIN_PATH = join(__dirname, "..", "bin")

const pipeline = promisify(stream.pipeline)

const ensureBinaries = async (update = false): Promise<string> => {
  log("ensuring binaries")

  let downloadUrl = YT_DLP_URL_WIN
  let filename = "yt-dlp.exe"
  jetpack.dir(BIN_PATH)

  switch (os.platform()) {
    case "linux":
      downloadUrl = YT_DLP_URL_UNIX
      filename = "yt-dlp"
      break
  }

  jetpack.dir(BIN_PATH)
  const filePath = join(BIN_PATH, filename)
  if (jetpack.exists(filePath)) {
    log(`found binary at ${filePath}`)

    if (update) {
      log("updating binary")
      const { stdout } = await execa(filePath, ["--update"])

      log(`updated binary: ${stdout}`)
    }
    return filePath
  }

  await pipeline(got.stream(downloadUrl), jetpack.createWriteStream(filePath))
  return filePath
}

export default ensureBinaries
