import debug from "debug"

const INSTANCE = debug("yt-dl")

export default (namespace: string): debug.Debugger => INSTANCE.extend(namespace)
