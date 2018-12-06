
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs    from 'rollup-plugin-commonjs';

const pkg = require('./package');

export default {

  input     : 'build/jssm-viz.es5.js',

  output    : {
    file      : 'build/jssm-viz.es5.cjs.js',
    format    : 'cjs',
    name      : 'jssm-viz',
    sourcemap : true,
  },

  plugins   : [

    commonjs({
      namedExports: {},
    }),

    nodeResolve({
      module: true,
      jsnext: true,
      browser: true,
      extensions: [ '.js', '.json', '.jsx', '.ts', '.tsx' ],
      preferBuiltins: false
    })

  ]
}
