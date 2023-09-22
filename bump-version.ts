import pk from "./package.json"

const versionSplit = pk.version.split(".")
const major = Number(versionSplit[0])
const minor = Number(versionSplit[1])
const patch = Number(versionSplit[2])

function tryPatch(argv: string[]): number {
  if (argv.includes("--patch")) {
    return patch + 1
  }
  return patch
}

function tryMinor(argv: string[]): number {
  if (argv.includes("--minor")) {
    return minor + 1
  }
  return minor
}

function tryMajor(argv: string[]): number {
  if (argv.includes("--major")) {
    return major + 1
  }
  return major
}

const newVersion = `${tryMajor(process.argv)}.${tryMinor(process.argv)}.${tryPatch(process.argv)}`

pk.version = newVersion

const packageJson = JSON.stringify(pk, null, 2) // indent with 2 spaces

Bun.write("./package.json", packageJson)
