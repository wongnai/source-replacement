import path from 'path'

import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript'
import visualizer from 'rollup-plugin-visualizer'

import config from './package.json'

export default {
  input: config.entry,
  output: {
    dir: config.deploy,
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      declaration: true,
      declarationDir: config.deploy,
      exclude: 'src/**/*.test.ts',
    }),
    json(),
    visualizer({
        filename: path.resolve(config.deploy, 'stat.html')
    }),
  ],
};
