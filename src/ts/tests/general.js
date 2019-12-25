
import {test, describe} from 'ava-spec';
import {sm}             from 'jssm';

const jv = require('../../../dist/jssm-viz.cjs.js');  // TODO FIXME should be es6 ready too

// nyc isn't able to mark something this large, it seems
// const jssm = require('../../../build/jssm-viz.cjs.js');

// save this setup for OS calls later at least





describe('stub/0', async it => {
  it('2+2 is 4', t => t.deepEqual(4, 2+2));
});

describe('renders jssm machine', async it => {

  const machine = sm`a->b;`,
        dot     = jv.dot(machine);

  it('to dot', t => t.true(dot.includes('digraph')) );

});

// stochable