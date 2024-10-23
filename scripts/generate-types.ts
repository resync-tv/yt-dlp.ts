import { execa } from "execa"
import { writeFile } from "node:fs/promises"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import { InputData, jsonInputForTargetLanguage, quicktype } from "quicktype-core"
import testVideos from "../test-videos.json"

const __dirname = dirname(fileURLToPath(import.meta.url))

const OUTPUT_PATH = join(__dirname, "../types/yt-dlp.d.ts")
const BANNER = `${[
  "// This file was generated by scripts/generate-types.ts",
  "// Do not edit this file by hand.",
  "/* eslint-disable @typescript-eslint/ban-types */",
].join("\n")}\n\n`

const samples: string[] = []

console.log("Fetching test videos...")
for (const [name, url] of Object.entries(testVideos)) {
  console.log(`  - ${name}`)
  const process = await execa("yt-dlp", ["-J", url])
  samples.push(process.stdout)

  await writeFile(
    join(__dirname, `../type-samples.json`),
    JSON.stringify(samples, undefined, 2)
  )
}

const jsonInput = jsonInputForTargetLanguage("typescript")
await jsonInput.addSource({ name: "yt-dlp", samples })

const inputData = new InputData()
inputData.addInput(jsonInput)

console.log("Generating types...")
const schema = await quicktype({
  inputData,
  lang: "typescript",
  inferEnums: false,
  inferUuids: false,
  inferDateTimes: false,
  inferMaps: false,
  inferBooleanStrings: false,
  inferIntegerStrings: false,
  rendererOptions: {
    "just-types": true,
    "runtime-typecheck": false,
    "prefer-unions": true,
    "prefer-types": true,
  },
})

writeFile(OUTPUT_PATH, BANNER + schema.lines.join("\n"))

console.log("Done.")
