import path from 'path'

import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import visualizer from 'rollup-plugin-visualizer'

import config from './package.json'

const sharedPlugins = [
  resolve({
    browser: true,
  }),
  commonjs(),
  typescript({
    declaration: true,
    declarationDir: config.deploy,
    exclude: 'src/**/*.test.ts',
  }),
  json(),
  visualizer({
    filename: path.resolve(config.deploy, 'stat.html'),
  }),
]

export default [
  {
    input: 'src/executors/code-blocker/index.ts',
    output: {
      dir: config.deploy,
      format: 'cjs',
    },
    plugins: sharedPlugins
  },
  {
    input: 'src/executors/source-replacement/index.ts',
    output: {
      dir: config.deploy,
      format: 'umd',
      name: 'SourceReplacement',
    },
    plugins: sharedPlugins,
  },
]
