import chalk from "chalk";
// import less from 'rollup-plugin-less';
import json from "rollup-plugin-json";
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
// import { uglify } from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const log = console.log;
const FORMATCONFIG = process.env.FORMAT || 'esm';

const config = {
  esm: {
    output: {
      dir: 'esm',
      format: 'esm',
    }
  },
  cjs: {
    output: {
      dir: 'lib',
      format: 'cjs',
    }
  },
  umd: {
    output: {
      dir: 'umd',
      format: 'umd',
      name: 'ascs'
    }
  }
};
log(chalk.blue('[即将发布的版本]', pkg.version));
log(chalk.blue('[编译类型]', FORMATCONFIG));
log(chalk.blue('[输出目录]', config[FORMATCONFIG].output.dir));

export default {
  input: "src/index.ts",
  ...config[FORMATCONFIG],
  onwarn(warning) {
    console.log(chalk.yellow('[WARNING] ', warning.message))
  },
  plugins: [
    // less(),
    resolve(),
    commonjs(),
    typescript({
      clean: true,
      useTsconfigDeclarationDir: true,
      tsconfigDefaults: {
        compilerOptions: {
          declarationDir: './types'
        }
      }
    }),
    babel({
      exclude: "node_modules/**",
      extensions: ['.ts', '.tsx'],
      runtimeHelpers: true
    }),
    json()
  ]
}
