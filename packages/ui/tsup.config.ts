import { defineConfig } from 'tsup';
import pkg from './package.json' with { type: 'json' };

const entryPath = './src/index.ts';
const dist = `./dist`;

const external = [
  ...Object.keys(pkg.peerDependencies),
  // react-syntax-highlighter는 번들에 포함시켜야 함
  ...Object.keys(pkg.dependencies).filter(dep => dep !== 'react-syntax-highlighter'),
];

export default defineConfig({
  entry: [entryPath],
  format: ['cjs', 'esm'],
  target: 'esnext',
  dts: true,
  outDir: dist,
  clean: true,
  minify: true,
  sourcemap: false,
  external,
  esbuildOptions(options) {
    options.jsx = 'automatic';
    options.jsxImportSource = 'react';
  },
  onSuccess: 'npx @tailwindcss/cli@latest -i ./src/style/global.css -o ./dist/ui-tailwind.min.css --minify',
  // onSuccess: 'tailwindcss -i ./src/style/global.css -o ./dist/ui-tailwind.min.css --minify',
});
