
import * as jssm from 'jssm';
const sm = jssm.sm;

import Viz from 'viz.js';
import { Module, render } from 'viz.js/full.render.js';

import { default_viz_colors } from './default_colors';





var viz = new Viz({ Module, render });





function dot_to_svg(dot: string, config? : Object): Promise<string> {  // whargarbl jssm isn't an any
  return viz.renderString(dot);
}





// function svg_el(dot: string, config? : Object): Document {
//   return new DOMParser().parseFromString( dot_to_svg(dot, config), 'text/html' );
// }




/* todo
function png_el(dot: string, config? : Object): HTMLImageElement {  // whargarbl jssm isn't an any // whargarbl should return an image element, not a string
  var cfg = Object.assign({}, config, { format: "png-image-element" });
//  return vizjs(dot, cfg);
return 'todo';
}
*/





// compatability, remove in 2.0.0

function dot(jssm: any) {
  machine_to_dot(jssm);
}





function machine_to_dot(jssm: any) {  // whargarbl jssm isn't an any

  const l_states = jssm.states();

  const node_of  = state => `n${l_states.indexOf(state)}`,
        vc       = col   => ( default_viz_colors[col] || '' );  // todo make these configurable

  const nodes : string = l_states.map( (s) => {

    const this_state = jssm.state_for(s),
          terminal   = jssm.state_is_terminal(s),
          final      = jssm.state_is_final(s),
          complete   = jssm.state_is_complete(s),
          features   = [
                        ['label',       s],
                        ['peripheries', complete? 2 : 1  ],
                        ['fillcolor',   final   ? vc('fill_final')    :
                                       (complete? vc('fill_complete') :
                                       (terminal? vc('fill_terminal') :
                                                  '')) ]
                       ]
                        .filter(r => r[1])
                        .map(   r => `${r[0]}="${r[1]}"`)
                        .join(' ');
    return `${node_of(s)} [${features}];`;

  }).join(' ');

  const strike = [];

  const edges  = jssm.states().map( (s) =>

    jssm.list_exits(s).map( (ex) => {

      if ( strike.find(row => (row[0] === s) && (row[1] == ex) ) ) {
          return '';  // already did the pair
      }

      const doublequote    = txt => txt.replace('"', '\\"');

      const edge           = jssm.list_transitions(s, ex),
            edge_id        = jssm.get_transition_by_state_names(s, ex),
            edge_tr        = jssm.lookup_transition_for(s, ex),
            pair           = jssm.list_transitions(ex, s),
            pair_id        = jssm.get_transition_by_state_names(ex, s),
            pair_tr        = jssm.lookup_transition_for(ex, s),
            double         = pair_id && (s !== ex),

            head_state     = jssm.state_for(s),
            tail_state     = jssm.state_for(ex),

            nlJoinIfAny    = items => items.filter(item => !([undefined, ''].includes(item))).join('\n'),

            if_obj_field   = (obj, field) => obj? (obj[field] || '') : '',

            h_final        = jssm.state_is_final(s),
            h_complete     = jssm.state_is_complete(s),
            h_terminal     = jssm.state_is_terminal(s),

            t_final        = jssm.state_is_final(ex),
            t_complete     = jssm.state_is_complete(ex),
            t_terminal     = jssm.state_is_terminal(ex),

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

      return `${node_of(s)}->${node_of(ex)} [${labelInline}${edgeInline}];`;

    }).join(' ')

  ).join(' ');

  // todo lol just do this right, jerk
//  let MaybeRankDir = window? (window.lrGViz? 'rankdir=LR;' : '') : '';
  let MaybeRankDir = 'rankdir=LR;';

  return `digraph G {\n${MaybeRankDir}  fontname="Open Sans";\n  style=filled;\n  bgcolor="${vc('graph_bg_color')}";\n  node [fontsize=14; shape=box; style=filled; fillcolor=white; fontname="Times New Roman"];\n  edge [fontsize=6;fontname="Open Sans"];\n\n  ${nodes}\n\n  ${edges}\n}`;

}





function fsl_to_dot(fsl: string): string {
  return machine_to_dot(sm`${fsl}`);
}





function fsl_to_svg_string(fsl: string): Promise<string> {
  return dot_to_svg(fsl_to_dot(fsl));
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
