import babel from '@rollup/plugin-babel';
import typescript from "rollup-plugin-typescript2"
const ReactCompilerConfig = { };

export default {
    input: "src/index.ts",
    output: [
        {
            file: "dist/mst-react.cjs.js",
            format: "cjs",
            sourcemap: true
        },
        {
            file: "dist/mst-react.esm.js",
            format: "esm",
            sourcemap: true
        }
    ],
    external: ["react", "mobx-state-tree", "mobx"],
    plugins: [
        babel({
          include: ['src/**/*', '__tests__/components/**/*'],
          babelHelpers: 'bundled',
          plugins: [
            ['babel-plugin-react-compiler', ReactCompilerConfig], // must run first!
          ]
        }),
        typescript({
            tsconfig: "./tsconfig.json"
        }),
    ]
}
