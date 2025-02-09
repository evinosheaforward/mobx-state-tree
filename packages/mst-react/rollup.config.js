import mstConfig from "../../rollup.config.js"
import typescript from "rollup-plugin-typescript2"

export default {
    ...mstConfig,
    input: "src/index.ts",
    output: [
        {
            file: "dist/my-library.cjs.js",
            format: "cjs",
            sourcemap: true
        },
        {
            file: "dist/my-library.esm.js",
            format: "esm",
            sourcemap: true
        }
    ],
    external: ["react", "mobx-state-tree"],
    plugins: [
        ...mstConfig.plugins,
        typescript({
            tsconfig: "./tsconfig.json"
        })
    ]
}
