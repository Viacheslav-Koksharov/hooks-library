import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import json from '@rollup/plugin-json';

// const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
        {
            file: "dist/cjs/index.js",
            format: "cjs",
            sourcemap: true,
          },
          {
            file: "dist/esm/index.js",
            format: "esm",
            sourcemap: true,
          },
    ],
    plugins: [
      resolve(),
      commonjs(),
      json(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts.default()],
  },
];
