
import nodeResolve from 'rollup-plugin-node-resolve';
import typescript  from 'rollup-plugin-typescript2';
import commonjs    from 'rollup-plugin-commonjs';
import ignore      from 'rollup-plugin-ignore';

const pkg = require('./package');





const es6config = {

  input     : 'src/ts/jssm-viz.ts',

  output    : {
    file      : 'build/jssm-viz.es6.js',
    format    : 'es',
    name      : 'jssm_viz',
    sourcemap : true,
  },

  plugins   : [

    ignore(['fs', 'path', 'crypto']),

    typescript(),

    commonjs({
      include: 'node_modules/**'
    }),

    nodeResolve({
      module         : true,
      jsnext         : true,
      browser        : true,
      extensions     : [ '.js', '.json', '.ts' ],
      preferBuiltins : false
    })

  ]

};





const cjsconfig = {

  input     : 'src/ts/jssm-viz.ts',

  output    : {
    file      : 'build/jssm-viz.cjs.js',
    format    : 'cjs',
    name      : 'jssm_viz',
    sourcemap : true,
  },

  plugins   : [

    ignore(['fs', 'path', 'crypto']),

    typescript(),

    commonjs({
      include: 'node_modules/**'
    }),

    nodeResolve({
      module         : true,
      jsnext         : true,
      browser        : true,
      extensions     : [ '.js', '.json', '.ts' ],
      preferBuiltins : false
    })

  ]

};





const iifeconfig = {

  input     : 'src/ts/jssm-viz.ts',

  output    : {
    file      : 'build/jssm-viz.iife.js',
    format    : 'iife',
    name      : 'jssm_viz',
    sourcemap : true,
  },

  plugins   : [

    ignore(['fs', 'path', 'crypto']),

    typescript(),

    commonjs({
      include: 'node_modules/**'
    }),

    nodeResolve({
      module         : true,
      jsnext         : true,
      browser        : true,
      extensions     : [ '.js', '.json', '.ts' ],
      preferBuiltins : false
    })

  ]

};





export default [ es6config, cjsconfig, iifeconfig ];
