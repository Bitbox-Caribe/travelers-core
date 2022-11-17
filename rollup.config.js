import terser from "@rollup/plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const packageJson = require("./package.json");

export default {
  input: "src/index.js",
  output: [
    { file: packageJson.main, format: "cjs" },
    { file: packageJson.module, format: "es", exports: "named" },
  ],
  plugins: [
    peerDepsExternal(),
    nodeResolve(),
    babel({ babelHelpers: "bundled" }),
    commonjs(),
    terser(),
    postcss({
      minimize: true,
      modules: true,
      autoModules: true,
      extract: true,
    }),
  ],
};
