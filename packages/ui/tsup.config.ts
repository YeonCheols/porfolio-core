import { defineConfig } from 'tsup';
import pkg from './package.json' with { type: 'json' };

const entryPath = './src/index.ts';
const dist = `./dist`;

const external = [
  ...Object.keys(pkg.dependencies),
  ...Object.keys(pkg.peerDependencies),
  'react/jsx-runtime',
  'react-icons',
  'react-icons/*',
  'react-icons/ai',
  'react-icons/bi',
  'react-icons/bs',
  'react-icons/cg',
  'react-icons/di',
  'react-icons/fa',
  'react-icons/fi',
  'react-icons/gi',
  'react-icons/gr',
  'react-icons/hi',
  'react-icons/io',
  'react-icons/lu',
  'react-icons/md',
  'react-icons/ri',
  'react-icons/rx',
  'react-icons/si',
  'react-icons/tb',
  'react-icons/vsc',
  'react-icons/wi',
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
  onSuccess: 'npx @tailwindcss/cli@latest -i ./src/style/global.css -o ./dist/ui-tailwind.min.css --minify',
  // onSuccess: 'tailwindcss -i ./src/style/global.css -o ./dist/ui-tailwind.min.css --minify',
});
