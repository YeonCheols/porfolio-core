import { defineConfig } from 'tsup';
import pkg from './package.json' with { type: 'json' };

const filePath = './src';
const dist = `./dist`;

const external = [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})];

export default defineConfig(() => ({
  entry: [filePath],
  format: ['cjs', 'esm'],
  dts: true,
  outDir: dist,
  clean: true,
  minify: true,
  sourcemap: false,
  external,
  treeshake: {
    moduleSideEffects: false,
  },
}));
