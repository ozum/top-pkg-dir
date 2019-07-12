import pkgDir from "pkg-dir";
import { join } from "path";

/**
 * Searches recursively top most package.json and returns path of it's directory.
 *
 * @ignore
 * @param cwd is directory to start from
 * @returns top most `package.json`s directory path.
 */
async function topPkgDir(): Promise<string>;
async function topPkgDir(cwd: string): Promise<string | undefined>;
async function topPkgDir(cwd: string = process.cwd()): Promise<string | undefined> {
  let currentPkgDir = await pkgDir(cwd);
  let parentPkgDir;

  do {
    parentPkgDir = currentPkgDir ? await pkgDir(join(currentPkgDir, "..")) : undefined; // eslint-disable-line no-await-in-loop
    currentPkgDir = parentPkgDir || currentPkgDir;
  } while (parentPkgDir !== undefined);

  return currentPkgDir;
}

/**
 * Searches recursively top most package.json and returns path of it's directory synchronously.
 *
 * @ignore
 * @param cwd is directory to start from
 * @returns top most `package.json`s directory path.
 */
function topPkgDirSync(): string;
function topPkgDirSync(cwd: string): string | undefined;
function topPkgDirSync(cwd: string = process.cwd()): string | undefined {
  let currentPkgDir = pkgDir.sync(cwd);
  let parentPkgDir;

  do {
    parentPkgDir = currentPkgDir ? pkgDir.sync(join(currentPkgDir, "..")) : undefined;
    currentPkgDir = parentPkgDir || currentPkgDir;
  } while (parentPkgDir !== undefined);

  return currentPkgDir;
}

// Assign sync function as an attribute: import topPkgDir from "top-pkg-dir"; const dir = topPkgDir.sync();
topPkgDir.sync = topPkgDirSync;

export default topPkgDir;
