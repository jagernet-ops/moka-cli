import { build, emptyDir } from "@deno/dnt";

await emptyDir("./bin");

await build({
  entryPoints: ["./src/index.ts"],
  outDir: "./bin",
  shims: {
    deno: true,
  },
  package: {
    name: "@dairyland/moka-cli",
    version: Deno.args[0],
    description: "Macros Simplified.",
    license: "BSD-2-Clause",
    repository: {
      type: "git",
      url: "git+https://github.com/jagernet-ops/moka-cli.git",
    },
    bugs: {
      url: "https://github.com/jagernet-ops/moka-cli/issues",
    },
  },
});
