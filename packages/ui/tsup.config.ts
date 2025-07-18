import { defineConfig } from 'tsup';
import pkg from './package.json' with { type: 'json' };

const entryPath = './src/index.ts';
const dist = `./dist`;

const external = [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})];

export default defineConfig({
  entry: [entryPath],
  format: ['cjs', 'esm'],
  dts: true,
  outDir: dist,
  clean: true,
  minify: true,
  sourcemap: false,
  external,
  onSuccess: 'tailwindcss -i ./src/style/global.css -o ./dist/ui-tailwind.min.css --minify',
});
