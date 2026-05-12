# jssm-viz

Visualization of [JSSM](https://github.com/StoneCypher/jssm/) machines using [viz.js](https://github.com/mdaines/viz.js/)



<br/><br/>

## Deprecated!

This was written when tree shaking and alternate entrypoints weren't native to node.  Now they are.  This project was created to prevent the high size of one dependency from impacting the main library.  That no longer makes sense.

All JSSM support libraries have been folded into JSSM.

***As of May 12 2026, 5.105.0 is the final version of standalone jssm-viz***.

jssm-viz is now [part of jssm](https://github.com/StoneCypher/jssm) and no longer exists as a standalone project.





<br/><br/>

## TL;DR

Easy to use `fsl` to `svg` through `jssm`.





<br/><br/>

### Node

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






<br/><br/>

### Browser

```html
<!doctype html><html><head><title>jssm-viz example</title>
    <script defer type="text/javascript" src="jssm-viz.iife.js"></script>
    <script defer type="text/javascript">

      window.onload = async () => {

        const ExMachine = `
          Green => Yellow => Red => Green;
          [Red Yellow Green] ~> Off -> Red;
        `;

        document.getElementById('tgt').innerHTML = await window.jssm_viz.fsl_to_svg_string(ExMachine);

      }

    </script>

  </head>

  <body><div id="tgt"></div></body>

</html>
```





## What is this?

`jssm-viz` was a way to render your `fsl` and `jssm` to `svg` (and from there to `jpeg` and `png`.)

Now it's just built into JSSM directly.

[See it in use](https://stonecypher.github.io/jssm-viz-demo/graph_explorer.html).
