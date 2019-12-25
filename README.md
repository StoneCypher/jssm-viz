# jssm-viz

Visualization of [JSSM](https://github.com/StoneCypher/jssm/) machines using [viz.js](https://github.com/mdaines/viz.js/)



<br/><br/>

## TL;DR

```shell
cd ~/projects && mkdir jssm-viz-demo && cd jssm-viz-demo
npm init -y && npm install --save-dev jssm-viz
```

in `dump_svg.js`:

```javascript
async function run() {

  const jssm_viz = require('jssm-viz'),
        fsl_code = 'green => yellow => red => green; [green yellow red] ~> off -> red;';

  svg_code = await jssm_viz.fsl_to_svg_string(fsl_code);

  console.log(svg_code);

}

run();
```

```shell
node ./dump_svg.js
```

Et voila: `svg` of your `fsl`.



## What is this?

`jssm-viz` is a way to render your `fsl` and `jssm` to `svg` (and from there to `jpeg` and `png`.)

[See it in use](https://stonecypher.github.io/jssm-viz-demo/graph_explorer.html).

TODO: write a better readme