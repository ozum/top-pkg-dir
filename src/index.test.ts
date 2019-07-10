import { join } from "path";
import topPkgDir from "./index";

describe("topPkgDir", () => {
  it("should find top most path of package.json directory.", async () => {
    const dir = await topPkgDir();
    const expected = join(__dirname, "..");
    expect(dir).toBe(expected);
  });

  it("should return undefined if no package.json can be found.", async () => {
    const dir = await topPkgDir(join(__dirname, "../.."));
    expect(dir).toBeUndefined();
  });
});

describe("Sync topPkgDir", () => {
  it("should find top most path of package.json directory.", () => {
    const dir = topPkgDir.sync();
    const expected = join(__dirname, "..");
    expect(dir).toBe(expected);
  });

  it("should return undefined if no package.json can be found.", () => {
    const dir = topPkgDir.sync(join(__dirname, "../.."));
    expect(dir).toBeUndefined();
  });
});
