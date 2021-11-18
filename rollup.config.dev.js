import serve from 'rollup-plugin-serve'
import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';
import pug from 'rollup-plugin-pug';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'lib',
    format: 'es',
    sourcemap: true
  },
  plugins: [
    serve(),
		postcss({
      plugins: []
		}),
		pug(),
		typescript()
	]
};


