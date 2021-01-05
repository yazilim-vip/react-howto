import css from 'rollup-plugin-css-only'
import dts from 'rollup-plugin-dts'
import typescript from 'rollup-plugin-typescript'

import pkg from './package.json'

const input = 'src/index.tsx'

const plugins = [
    typescript({
        typescript: require('typescript')
    }),
    css({ output: 'bundle.css' })
]

export default [
    {
        input,
        output: {
            file: pkg.module,
            format: 'esm',
            sourcemap: true
        },
        plugins
    },
    {
        input,
        output: {
            file: pkg.main,
            format: 'cjs',
            sourcemap: true
        },
        plugins
    },
    {
        input: './src/typings.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'es' }],
        plugins: [dts()]
    }
]
