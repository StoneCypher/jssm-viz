
import nodeResolve   from '@rollup/plugin-node-resolve';
import commonjs      from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-polyfill-node';
// import ignore     from '@rollup/plugin-ignore';

const pkg = require('./package');





const es6config = {

  input     : 'build/typescript/jssm-viz.js',

  output    : {
    file      : 'build/rollup/jssm-viz.es6.js',
    format    : 'es',
    name      : 'jssm_viz',
    sourcemap : true,
  },

  plugins   : [

//    ignore(['fs', 'path', 'crypto']),
    nodePolyfills(),

    commonjs({
      include: 'node_modules/**'
    }),

    nodeResolve({
      module         : true,
      jsnext         : true,
      // browser        : true,
      extensions     : [ '.js', '.json', '.ts' ],
      preferBuiltins : false
    })

  ]

};





const cjsconfig = {

  input     : 'build/typescript/jssm-viz.js',

  output    : {
    file      : 'build/rollup/jssm-viz.cjs.js',
    format    : 'cjs',
    name      : 'jssm_viz',
    sourcemap : true,
  },

  plugins   : [

//    ignore(['fs', 'path', 'crypto']),
    nodePolyfills(),

    commonjs({
      include: 'node_modules/**'
    }),

    nodeResolve({
      module         : true,
      jsnext         : true,
      // browser        : true,
      extensions     : [ '.js', '.json', '.ts' ],
      preferBuiltins : false
    })

  ]

};





const iifeconfig = {

  input     : 'build/typescript/jssm-viz.js',

  output    : {
    file      : 'build/rollup/jssm-viz.iife.js',
    format    : 'iife',
    name      : 'jssm_viz',
    sourcemap : true,
  },

  plugins   : [

//    ignore(['fs', 'path', 'crypto']),
    nodePolyfills(),

    commonjs({
      include: 'node_modules/**'
    }),

    nodeResolve({
      module         : true,
      jsnext         : true,
      // browser        : true,
      extensions     : [ '.js', '.json', '.ts' ],
      preferBuiltins : false
    })

  ]

};





export default [ es6config, cjsconfig, iifeconfig ];
