
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs    from '@rollup/plugin-commonjs';
import dts         from "rollup-plugin-dts";




const es6config = [{

  input     : 'build/typescript/jssm-viz.js',

  output    : {
    file      : 'build/rollup/jssm-viz.es6.js',
    format    : 'es',
    name      : 'jssm_viz',
    sourcemap : true,
  },

  plugins   : [

//    ignore(['fs', 'path', 'crypto']),

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

}, {

  input: 'build/typescript/jssm-viz.d.ts',

  output: { 
    file   : './build/rollup/jssm-viz.es6.d.ts',
    format : 'es'
  },

  plugins : [

    dts()
  ]}
];





const cjsconfig = [{

  input     : 'build/typescript/jssm-viz.js',

  output    : {
    file      : 'build/rollup/jssm-viz.cjs.cjs',
    format    : 'cjs',
    name      : 'jssm_viz',
    sourcemap : true,
  },

  plugins   : [

//    ignore(['fs', 'path', 'crypto']),

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

}, {

  input: 'build/typescript/jssm-viz.d.ts',

  output: { 
    file   : './build/rollup/jssm-viz.cjs.d.cts',
    format : 'cjs'
  },

  plugins : [

    dts()
  ]}
];





const iifeconfig = [{

  input     : 'build/typescript/jssm-viz.js',

  output    : {
    file      : 'build/rollup/jssm-viz.iife.js',
    format    : 'iife',
    name      : 'jssm_viz',
    sourcemap : true,
  },

  plugins   : [

//    ignore(['fs', 'path', 'crypto']),

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

}];





export default [ ...es6config, ...cjsconfig, ...iifeconfig ];
