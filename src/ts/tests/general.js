
import {test, describe} from 'ava-spec';
import {sm}             from 'jssm';

const jv = require('../../../dist/jssm-viz.cjs.js');  // TODO FIXME should be es6 ready too

// nyc isn't able to mark something this large, it seems





describe('stub/0', async it => {
  it('2+2 is 4', t => t.deepEqual(4, 2+2));
});

describe('renders jssm machine to dot', async it => {
  const machine = sm`a->b;`,
        dot     = jv.machine_to_dot(machine);
  it('to dot', t => t.true(dot.includes('digraph')) );
});

describe('renders fsl', async it => {
  it('to dot', t => t.true(jv.fsl_to_dot('a -> b;').includes('digraph')) );

  const svg = await jv.fsl_to_svg_string('a -> b;');
  it('to svg', t => t.true(svg.includes('<!DOCTYPE')) );
});
