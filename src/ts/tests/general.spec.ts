
import {sm}    from 'jssm';
import * as jv from '../../../dist/jssm-viz.cjs.cjs';

// nyc isn't able to mark something this large, it seems





describe('Test the test rig', () => {

  test('2+2 is 4', () =>
    expect(2+2)
      .toBe(4));

});





describe('Render tests', () => {

  const machine = sm<string>`a->b;`;


  test('Renders to .dot', () => {

    expect(jv.machine_to_dot(machine))
      .toMatch('digraph');

  });


  test('Renders to .svg', async () => {

    const svg_result = await jv.fsl_to_svg_string('a -> b;');

    expect(svg_result)
      .toMatch('<!DOCTYPE');

  });


  test('Renders to .png', async () => {

    await jv.init_png();

    const png_result = await jv.fsl_to_png('a -> b;');

    expect(png_result).toBeInstanceOf(Uint8Array);
    expect(png_result.length).toBeGreaterThan(0);

    // PNG magic bytes: 0x89 P N G
    expect(png_result[0]).toBe(0x89);
    expect(png_result[1]).toBe(0x50); // P
    expect(png_result[2]).toBe(0x4E); // N
    expect(png_result[3]).toBe(0x47); // G

  });


});
