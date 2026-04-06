import * as jssm from 'jssm';
export { jssm };

declare const version: string;
declare const build_time: number;

declare function dot_to_svg(dot: string, config?: Object, errorHandler?: Function): Promise<string>;
declare function init_png(wasm_source?: any): Promise<void>;
declare function svg_to_png(svg: string): Uint8Array;
declare function dot_to_png(dot: string): Promise<Uint8Array>;
declare function fsl_to_png(fsl: string): Promise<Uint8Array>;
declare function machine_to_png(u_jssm: jssm.Machine<string>): Promise<Uint8Array>;
declare function machine_to_dot(u_jssm: jssm.Machine<string>): string;
declare function dot(jssm: any): void;
declare function fsl_to_dot(fsl: string): string;
declare function fsl_to_svg_string(fsl: string, errorHandler?: Function): Promise<string>;
declare function machine_to_svg_string(u_jssm: jssm.Machine<string>, errorHandler?: Function): Promise<string>;

export { build_time, dot, dot_to_png, dot_to_svg, fsl_to_dot, fsl_to_png, fsl_to_svg_string, init_png, machine_to_dot, machine_to_png, machine_to_svg_string, svg_to_png, version };
