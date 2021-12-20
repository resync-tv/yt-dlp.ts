import { promisify } from "util"
import stream from "stream"
import os from "os"
import { join } from "path"
import { chmod } from "fs"

import jetpack from "fs-jetpack"
import got from "got"
import execa from "execa"

import debug from "./debug"
const log = debug("ensureBinaries")

const YT_DLP_URL_WIN = "https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp.exe"
const YT_DLP_URL_UNIX = "https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp"

const BIN_PATH = join(__dirname, "..", "bin")

const pipeline = promisify(stream.pipeline)
const chmodPromise = promisify(chmod)

const linuxPermissions = async (filePath: string) => {
  return await chmodPromise(filePath, "755")
}

/**
 * Ensure the existence of the binaries and/or download/update them.
 * @param update if the binary already exists, should it be updated? Defaults to `false`.
 * @returns path to the binary
 */
const ensureBinaries = async (update = false): Promise<string> => {
  log("ensuring binaries")

  let downloadUrl = YT_DLP_URL_WIN
  let filename = "yt-dlp.exe"

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

      if (os.platform() === "linux") linuxPermissions(filePath)
      log(`updated binary: ${stdout}`)
    }
    return filePath
  }

  await pipeline(got.stream(downloadUrl), jetpack.createWriteStream(filePath))

  if (os.platform() === "linux") linuxPermissions(filePath)
  return filePath
}

export default ensureBinaries
