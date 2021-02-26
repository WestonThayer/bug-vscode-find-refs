This demonstrates a bug in VSCode. I'm on version:

```
Version: 1.53.2
Commit: 622cb03f7e070a9670c94bae1a45d78d7181fbd4
Date: 2021-02-11T11:45:54.515Z
Electron: 11.2.1
Chrome: 87.0.4280.141
Node.js: 12.18.3
V8: 8.7.220.31-electron.0
OS: Darwin x64 18.7.0
```

To reproduce:

1. Open this repo
2. Open `api/src/server.ts`
3. Right click `.bar()` and try the "Find all references" command

ACTUAL: only `api/src/server.ts` and `shared/src/index.ts` are found as references
EXPECTED: all references are found, just like they would be if you right clicked `foo`
