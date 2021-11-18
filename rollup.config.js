import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import pug from 'rollup-plugin-pug';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'lib',
    format: 'es',
    sourcemap: true
  },
	plugins: [
		postcss({
      plugins: []
		}),
		pug(),
		typescript()
	]
};

