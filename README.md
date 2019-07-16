# top-pkg-dir

Find top most root directory of a Node.js project or npm package.

# Example

```
└─ Development
   └─ Projects
      └─ project-a
         ├─ package.json
         ├─ lib
         └─ node_modules
            ├─ project-b
            └─ lib
               └─ example.js
```

**example.js**

```js
import topPkgDir from "top-pkg-dir";

async function() {
  const topProjectDir = await topPkgDir(); // '/Development/Projects/project-a'
}
```

# API

## topPkgDir(cwd?)

Returns a `Promise` for either the top most project root path or `undefined` if it couldn't be found.

## topPkgDir.sync(cwd?)

Returns the top most project root path or `undefined` if it couldn't be found.

### cwd

Type: `string`<br>
Default: `process.cwd()`

Directory to start from.
