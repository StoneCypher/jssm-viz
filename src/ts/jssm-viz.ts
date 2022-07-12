
import * as jssm              from 'jssm';
import { default_viz_colors } from './default_colors';

const sm = jssm.sm;





import vizRenderStringSync from "@aduh95/viz.js/sync";

// function vizRenderStringSync(x) { return `[[[${x}]]]`; }

console.log(vizRenderStringSync("digraph{1 -> 2 }"));

// import Viz       from '@aduh95/viz.js';
// import getWorker from "@aduh95/viz.js/worker";

// function is_worker(w): w is Worker {
//   if ('postMessage' in w) { return true; }
//   return false;
// }

// let worker, viz;

// async function setup() {

//   worker = await getWorker();

//   if (worker === undefined) { // expected in browser or deno; failure in node

//   } else {
//     // should be node, TODO verify
//     if (!(is_worker(worker))) { throw 'Failed import!'; }
//   }

//   viz = new Viz({ worker });
//   (window as any).viz = viz;

// }

// setup();





async function dot_to_svg(dot: string, config? : Object, errorHandler? : Function): Promise<string> {  // whargarbl jssm isn't an any

  // return viz
  //   .renderString(dot);

  return vizRenderStringSync(dot);

}




/* todo
function png_el(dot: string, config? : Object): HTMLImageElement {  // whargarbl jssm isn't an any // whargarbl should return an image element, not a string
  var cfg = Object.assign({}, config, { format: "png-image-element" });
//  return vizjs(dot, cfg);
return 'todo';
}
*/





function dot_template(RankDir, GraphBgColor, nodes, edges, arranges, preamble = "") {

  return `digraph G {
${preamble}

${RankDir}
fontname="Open Sans";
style=filled;
bgcolor="${GraphBgColor}";
node [fontsize=14; shape=box; style=filled; fillcolor=white; fontname="Times New Roman"];
edge [fontsize=6; fontname="Open Sans"];

${nodes}

${edges}

${arranges}
}`;

}





function vc(col) {
  return default_viz_colors[col] || '';  // todo make these configurable
}





function node_of(state, l_states): string {
  return `n${l_states.indexOf(state)}`;
}





// function color8to6(color8: rgba8): rgb6 { // TODO we could enforce types here
// TODO FIXME we're just throwing opacity away here
function color8to6(color8: string): string {

  if (color8.length !== 9) { throw 'not a color8'; }
  if (color8[0] !== '#')   { throw 'not a color8'; }

  return `#${color8.substring(1,7)}`;

}





function u_color8to6(color8?: string): string | undefined {
  if (color8 === undefined) { return undefined; }
  return color8to6(color8);
}





function border_color_for_state(u_jssm, state): string | undefined {

  const decls = u_jssm._state_declarations;
  if (!decls) { return undefined; }

  const state_decl = decls.get(state);
  if (!state_decl) { return undefined; }

  return u_color8to6( state_decl.borderColor );

}





function text_color_for_state(u_jssm, state): string | undefined {

  const decls = u_jssm._state_declarations;
  if (!decls) { return undefined; }

  const state_decl = decls.get(state);
  if (!state_decl) { return undefined; }

  return u_color8to6( state_decl.textColor );

}





function shape_for_state(u_jssm, state): string | undefined {

  const decls = u_jssm._state_declarations;
  if (!decls) { return undefined; }

  const state_decl = decls.get(state);
  if (!state_decl) { return undefined; }

  return state_decl.shape;

}





function style_for_state(u_jssm, state): string | undefined {

  const decls = u_jssm._state_declarations;
  if (!decls) { return undefined; }

  const state_decl = decls.get(state);
  if (!state_decl) { return undefined; }

  const corners = {
    rounded: 'rounded',
    lined:   'diagonals'
  }[state_decl.corners];

  const lines = {
    dashed: 'dashed',
    dotted: 'dotted'
  }[state_decl.linestyle];

  const style = [corners, lines]
                  .filter(f => f !== '')
                  .join(',');

  return style? `${style},filled` : '';

}





function background_color_for_state(u_jssm, state): string | undefined {

  const decls = u_jssm._state_declarations;
  if (!decls) { return undefined; }

  const state_decl = decls.get(state);
  if (!state_decl) { return undefined; }

  return u_color8to6( state_decl.backgroundColor );

}





function states_to_nodes_string(u_jssm, l_states): string {

  return l_states.map( (s) => {

    const bordercolor = border_color_for_state(u_jssm, s),
          bgcolor     = background_color_for_state(u_jssm, s),
          fgcolor     = text_color_for_state(u_jssm, s);

    const this_state = u_jssm.state_for(s),
//        opening    = u_jssm.state_is_start_state(s),   TODO COMEBACK FIXME
          terminal   = u_jssm.state_is_terminal(s),
          final      = u_jssm.state_is_final(s),
          complete   = u_jssm.state_is_complete(s),
          features   = [
                        ['label',       s],
                        ['shape',       shape_for_state(u_jssm, s)   || ''],
                        ['peripheries', complete? 2 : 1  ],  // TODO COMEBACK use peripheries for current state instead
                        ['color',       bordercolor                  || '' ],
                        ['style',       style_for_state(u_jssm, s)   || '' ],
                        ['fontcolor',   fgcolor                      || '' ],
                        ['fillcolor',   bgcolor ? bgcolor             :
                                       (final   ? vc('fill_final')    :
                                       (complete? vc('fill_complete') :
                                       (terminal? vc('fill_terminal') :
                                                  ''))) ]
                       ]
                        .filter(r => r[1])
                        .map(   r => `${r[0]}="${r[1]}"`)
                        .join(' ');

    return `${node_of(s, l_states)} [${features}];`;

  }).join(' ');

}





function states_to_edges_string(u_jssm, l_states, strike): string {

  return u_jssm.states().map( (s) =>

    u_jssm.list_exits(s).map( (ex) => {

      if ( strike.find(row => (row[0] === s) && (row[1] == ex) ) ) {
          return '';  // already did the pair
      }

      const doublequote    = txt => txt.replace('"', '\\"');

      const edge           = u_jssm.list_transitions(s, ex),
//          edge_id        = u_jssm.get_transition_by_state_names(s, ex),
            edge_tr        = u_jssm.lookup_transition_for(s, ex),
            pair           = u_jssm.list_transitions(ex, s),
            pair_id        = u_jssm.get_transition_by_state_names(ex, s),
            pair_tr        = u_jssm.lookup_transition_for(ex, s),
            double         = pair_id && (s !== ex),

//            head_state     = u_jssm.state_for(s),
//            tail_state     = u_jssm.state_for(ex),

            nlJoinIfAny    = items => items.filter(item => !([undefined, ''].includes(item))).join('\n'),

            if_obj_field   = (obj, field) => obj? (obj[field] || '') : '',

            h_final        = u_jssm.state_is_final(s),
            h_complete     = u_jssm.state_is_complete(s),
            h_terminal     = u_jssm.state_is_terminal(s),

            t_final        = u_jssm.state_is_final(ex),
            t_complete     = u_jssm.state_is_complete(ex),
            t_terminal     = u_jssm.state_is_terminal(ex),

            lineColor      = (final, complete, terminal, lkind, _solo_1_2 = '_solo') =>
                               final   ? (vc(`${lkind}_final`    + _solo_1_2)) :
                              (complete? (vc(`${lkind}_complete` + _solo_1_2)) :
                              (terminal? (vc(`${lkind}_terminal` + _solo_1_2)) :
                                          vc(`${lkind}`          + _solo_1_2))),

            textColor      = (final, complete, terminal, _solo_1_2 = '_solo') : string =>
                               final   ? (vc('text_final'    + _solo_1_2)) :
                              (complete? (vc('text_complete' + _solo_1_2)) :
                              (terminal? (vc('text_terminal' + _solo_1_2)) :
                                         '')),

            headColor      = textColor(h_final, h_complete, h_terminal, double? '_1' : '_solo'),
            tailColor      = textColor(t_final, t_complete, t_terminal, double? '_2' : '_solo'),

            labelInline    = [
//                             [edge, 'name',        'label',     true],
                               [pair, 'probability', 'headlabel', 'name', 'action', double, headColor],
                               [edge, 'probability', 'taillabel', 'name', 'action', true,   tailColor]
                             ]
                             .map(    r       => ({ which: r[2], whether: (r[5]? ([(if_obj_field(r[0], r[5])), (if_obj_field(r[0], r[1])), (if_obj_field(r[0], r[3]))].filter(q=>q).join('<br/>') || '') : ''), color: r[6] }) )
                             .filter( present => present.whether )
                             .map(    r       => `${r.which}=${(r.color)? `<<font color="${(r.color)}">${(r.whether)}</font>>` : `"${(r.whether)}"`};`)
                             .join(' '),

//          label          = edge_tr ? ( nlJoinIfAny([edge_tr.action, edge_tr.probability]) ) : undefined,
            label          = edge_tr ? ([`${((edge_tr.action || ''))}`,`${((edge_tr.probability || ''))}`]
                                          .filter(not_empty => not_empty !== '')
                                          .join('\n') || undefined
                                       ) : undefined,

            maybeLabel     = label? `taillabel="${doublequote(label)}";` : '',

            rlabel         = pair_tr ? ([`${((pair_tr.action || ''))}`,`${((pair_tr.probability || ''))}`]
                                     .filter(not_empty => not_empty !== '')
                                       .join('\n') || undefined
                                      ) : undefined,

            maybeRLabel    = rlabel? `headlabel="${doublequote(rlabel)}";` : '',

            tc1            = lineColor(t_final, t_complete, t_terminal, edge_tr.kind,       '_1'),
            tc2            = lineColor(h_final, h_complete, h_terminal, (pair_tr||{}).kind, '_2'),
            tcd            = lineColor(t_final, t_complete, t_terminal, edge_tr.kind,       '_solo'),

            arrowHead      =           edge_tr.forced_only? 'ediamond' : (edge_tr.main_path? 'normal;weight=5' : 'empty'),
            arrowTail      = pair_tr? (pair_tr.forced_only? 'ediamond' : (pair_tr.main_path? 'normal;weight=5' : 'empty')) : '',

            edgeInline     = edge  ? (double? `${maybeLabel}${maybeRLabel}arrowhead=${arrowHead};arrowtail=${arrowTail};dir=both;color="${tc1}:${tc2}"`
                                            : `${maybeLabel}arrowhead=${arrowHead};color="${tcd}"`)
                                   : '';

      if (pair) { strike.push([ex, s]); }

      return `${node_of(s, l_states)}->${node_of(ex, l_states)} [${labelInline}${edgeInline}];`;

    }).join(' ')

  ).join(' ');

}





function flow_direction_to_rankdir(flow_direction) {

  switch (flow_direction) {

    case 'up'    : return 'rankdir=BT;'
    case 'right' : return 'rankdir=LR;'
    case 'down'  : return 'rankdir=TB;'
    case 'left'  : return 'rankdir=RL;'

    default      : throw new TypeError(`unknown flow direction '${flow_direction}'`);

  }

}





function arranges_for(u_jssm: any, l_states: any) {

  let decl = '';

  if (u_jssm._arrange_declaration) {
    // TODO FIXME items in d almost certainly need to be escaped
    // ugh WHARGARBL
    decl += u_jssm._arrange_declaration.map(d => `{rank=same; ${d.map(di => node_of(di, l_states)).join('; ')};};`).join('\n');
  }

  if (u_jssm._arrange_start_declaration) {
    // TODO FIXME items in d almost certainly need to be escaped
    // ugh WHARGARBL
    decl += u_jssm._arrange_start_declaration.map(d => `{rank=min; ${d.map(di => node_of(di, l_states)).join('; ')};};`).join('\n');
  }

  if (u_jssm._arrange_end_declaration) {
    // TODO FIXME items in d almost certainly need to be escaped
    // ugh WHARGARBL
    decl += u_jssm._arrange_end_declaration.map(d => `{rank=max; ${d.map(di => node_of(di, l_states)).join('; ')};};`).join('\n');
  }

  return decl;

}





function machine_to_dot(u_jssm: any) {  // whargarbl jssm isn't an any

  const l_states = u_jssm.states();

  const nodes : string = states_to_nodes_string(u_jssm, l_states);

  const strike = [];
  const edges  = states_to_edges_string(u_jssm, l_states, strike);

  const arranges = arranges_for(u_jssm, l_states);

  let RankDir  = flow_direction_to_rankdir(u_jssm.flow() || 'down'),
      preamble = u_jssm.dot_preamble() || '';

  return dot_template(RankDir, vc('graph_bg_color'), nodes, edges, arranges, preamble);

}





// compatability, remove in 2.0.0
function dot(jssm: any) {
  machine_to_dot(jssm);
}





function fsl_to_dot(fsl: string): string {
  return machine_to_dot(sm`${fsl}`);
}





function fsl_to_svg_string(fsl: string, errorHandler?: Function): Promise<string> {
  return dot_to_svg(fsl_to_dot(fsl), errorHandler);
}





// function fsl_to_parsed_svg(fsl: string): SVGElement {
//   return fsl_to_svg_string(fsl);
// }





export {
  dot, dot_to_svg, // svg_el,
  fsl_to_dot, fsl_to_svg_string,
  machine_to_dot,
  jssm
};
