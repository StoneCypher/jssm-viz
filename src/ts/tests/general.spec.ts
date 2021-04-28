
import {sm}    from 'jssm';
import * as jv from '../../../dist/jssm-viz.cjs.js';

// nyc isn't able to mark something this large, it seems





describe('Test the test rig', () => {

  test('2+2 is 4', () =>
    expect(2+2)
      .toBe(4));

});





describe('Render tests', () => {

  const machine = sm`a->b;`;


  test('Renders to .dot', () => {

    expect(jv.machine_to_dot(machine))
      .toMatch('digraph');

  });


  test('Renders to .svg', async () => {

    const svg_result = await jv.fsl_to_svg_string('a -> b;');

    expect(svg_result)
      .toMatch('<!DOCTYPE');

  });


});
