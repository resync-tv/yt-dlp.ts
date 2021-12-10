import { join } from "path"

import execa from "execa"
import { quicktype, InputData, jsonInputForTargetLanguage } from "quicktype-core"
import jetpack from "fs-jetpack"

import debug from "../src/debug"
const log = debug("generateTypes")

import ensureBinaries from "../src/ensureBinaries"
import testVideos from "../test-videos.json"

const TYPE_PATH_DLP = join(__dirname, "../types/yt-dlp.d.ts")

const quicktypeJSON = async (
  targetLanguage: string,
  typeName: string,
  jsonString: string[]
) => {
  const jsonInput = jsonInputForTargetLanguage(targetLanguage)

  await jsonInput.addSource({
    name: typeName,
    samples: jsonString,
  })

  const inputData = new InputData()
  inputData.addInput(jsonInput)

  return await quicktype({
    inputData,
    lang: targetLanguage,
    rendererOptions: {
      "just-types": "true",
      "runtime-typecheck": "false",
    },
  })
}

// TODO: make this more universal for other downloaders
!(async () => {
  const binPath = await ensureBinaries(true)

  const jsonStrings: string[] = []
  for (const [name, video] of Object.entries(testVideos)) {
    log(`getting yt-dlp json for ${name}`)

    const { stdout } = await execa(binPath, ["-J", video])
    jsonStrings.push(stdout)
  }

  log(`generating types for ${jsonStrings.length} videos`)
  const types = await quicktypeJSON("typescript", "Video", jsonStrings)

  jetpack.write(TYPE_PATH_DLP, types.lines.join("\n"))
})()
