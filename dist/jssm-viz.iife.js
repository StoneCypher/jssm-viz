var jssm_viz = (function (exports) {
  'use strict';

  const vizjs = require('viz.js');
  const default_viz_colors = {
      'graph_bg_color': '#eeeeee',
      'fill_final': '#ddddff',
      'fill_terminal': '#ffdddd',
      'fill_complete': '#ddffdd',
      'legal_1': '#888888',
      'legal_2': '#777777',
      'legal_solo': '#777777',
      'legal_final_1': '#7777aa',
      'legal_final_2': '#666699',
      'legal_final_solo': '#666699',
      'legal_terminal_1': '#aa7777',
      'legal_terminal_2': '#996666',
      'legal_terminal_solo': '#996666',
      'legal_complete_1': '#77aa77',
      'legal_complete_2': '#669966',
      'legal_complete_solo': '#669966',
      'main_1': '#444444',
      'main_2': '#333333',
      'main_solo': '#333333',
      'main_final_1': '#333366',
      'main_final_2': '#222255',
      'main_final_solo': '#222255',
      'main_terminal_1': '#663333',
      'main_terminal_2': '#552222',
      'main_terminal_solo': '#552222',
      'main_complete_1': '#336633',
      'main_complete_2': '#225522',
      'main_complete_solo': '#225522',
      'forced_1': '#cccccc',
      'forced_2': '#bbbbbb',
      'forced_solo': '#bbbbbb',
      'forced_final_1': '#bbbbee',
      'forced_final_2': '#aaaadd',
      'forced_final_solo': '#aaaadd',
      'forced_terminal_1': '#eebbbb',
      'forced_terminal_2': '#ddaaaa',
      'forced_terminal_solo': '#ddaaaa',
      'forced_complete_1': '#bbeebb',
      'forced_complete_2': '#aaddaa',
      'forced_complete_solo': '#aaddaa',
      'text_final_1': '#000088',
      'text_final_2': '#000088',
      'text_final_solo': '#000088',
      'text_terminal_1': '#880000',
      'text_terminal_2': '#880000',
      'text_terminal_solo': '#880000',
      'text_complete_1': '#007700',
      'text_complete_2': '#007700',
      'text_complete_solo': '#007700'
  };
  function dot_to_svg(dot, config) {
      return vizjs(dot, config);
  }
  function svg_el(dot, config) {
      return new DOMParser().parseFromString(dot_to_svg(dot, config), 'text/html');
  }
  function png_el(dot, config) {
      var cfg = Object.assign({}, config, { format: "png-image-element" });
      return vizjs(dot, cfg);
  }
  function dot(jssm) {
      const l_states = jssm.states();
      const node_of = state => `n${l_states.indexOf(state)}`, vc = col => (default_viz_colors[col] || '');
      const nodes = l_states.map((s) => {
          const this_state = jssm.state_for(s), terminal = jssm.state_is_terminal(s), final = jssm.state_is_final(s), complete = jssm.state_is_complete(s), features = [
              ['label', s],
              ['peripheries', complete ? 2 : 1],
              ['fillcolor', final ? vc('fill_final') :
                      (complete ? vc('fill_complete') :
                          (terminal ? vc('fill_terminal') :
                              ''))]
          ]
              .filter(r => r[1])
              .map(r => `${r[0]}="${r[1]}"`)
              .join(' ');
          return `${node_of(s)} [${features}];`;
      }).join(' ');
      const strike = [];
      const edges = jssm.states().map((s) => jssm.list_exits(s).map((ex) => {
          if (strike.find(row => (row[0] === s) && (row[1] == ex))) {
              return '';
          }
          const doublequote = txt => txt.replace('"', '\\"');
          const edge = jssm.list_transitions(s, ex), edge_id = jssm.get_transition_by_state_names(s, ex), edge_tr = jssm.lookup_transition_for(s, ex), pair = jssm.list_transitions(ex, s), pair_id = jssm.get_transition_by_state_names(ex, s), pair_tr = jssm.lookup_transition_for(ex, s), double = pair_id && (s !== ex), head_state = jssm.state_for(s), tail_state = jssm.state_for(ex), if_obj_field = (obj, field) => obj ? (obj[field] || '') : '', h_final = jssm.state_is_final(s), h_complete = jssm.state_is_complete(s), h_terminal = jssm.state_is_terminal(s), t_final = jssm.state_is_final(ex), t_complete = jssm.state_is_complete(ex), t_terminal = jssm.state_is_terminal(ex), lineColor = (final, complete, terminal, lkind, _solo_1_2 = '_solo') => final ? (vc(`${lkind}_final` + _solo_1_2)) :
              (complete ? (vc(`${lkind}_complete` + _solo_1_2)) :
                  (terminal ? (vc(`${lkind}_terminal` + _solo_1_2)) :
                      vc(`${lkind}` + _solo_1_2))), textColor = (final, complete, terminal, _solo_1_2 = '_solo') => final ? (vc('text_final' + _solo_1_2)) :
              (complete ? (vc('text_complete' + _solo_1_2)) :
                  (terminal ? (vc('text_terminal' + _solo_1_2)) :
                      '')), headColor = textColor(h_final, h_complete, h_terminal, double ? '_1' : '_solo'), tailColor = textColor(t_final, t_complete, t_terminal, double ? '_2' : '_solo'), labelInline = [
              [pair, 'probability', 'headlabel', 'name', 'action', double, headColor],
              [edge, 'probability', 'taillabel', 'name', 'action', true, tailColor]
          ]
              .map(r => ({ which: r[2], whether: (r[5] ? ([(if_obj_field(r[0], r[5])), (if_obj_field(r[0], r[1])), (if_obj_field(r[0], r[3]))].filter(q => q).join('<br/>') || '') : ''), color: r[6] }))
              .filter(present => present.whether)
              .map(r => `${r.which}=${(r.color) ? `<<font color="${(r.color)}">${(r.whether)}</font>>` : `"${(r.whether)}"`};`)
              .join(' '), label = edge_tr ? ([`${((edge_tr.action || ''))}`, `${((edge_tr.probability || ''))}`]
              .filter(not_empty => not_empty !== '')
              .join('\n') || undefined) : undefined, maybeLabel = label ? `taillabel="${doublequote(label)}";` : '', rlabel = pair_tr ? ([`${((pair_tr.action || ''))}`, `${((pair_tr.probability || ''))}`]
              .filter(not_empty => not_empty !== '')
              .join('\n') || undefined) : undefined, maybeRLabel = rlabel ? `headlabel="${doublequote(rlabel)}";` : '', tc1 = lineColor(t_final, t_complete, t_terminal, edge_tr.kind, '_1'), tc2 = lineColor(h_final, h_complete, h_terminal, (pair_tr || {}).kind, '_2'), tcd = lineColor(t_final, t_complete, t_terminal, edge_tr.kind, '_solo'), arrowHead = edge_tr.forced_only ? 'ediamond' : (edge_tr.main_path ? 'normal;weight=5' : 'empty'), arrowTail = pair_tr ? (pair_tr.forced_only ? 'ediamond' : (pair_tr.main_path ? 'normal;weight=5' : 'empty')) : '', edgeInline = edge ? (double ? `${maybeLabel}${maybeRLabel}arrowhead=${arrowHead};arrowtail=${arrowTail};dir=both;color="${tc1}:${tc2}"`
              : `${maybeLabel}arrowhead=${arrowHead};color="${tcd}"`)
              : '';
          if (pair) {
              strike.push([ex, s]);
          }
          return `${node_of(s)}->${node_of(ex)} [${labelInline}${edgeInline}];`;
      }).join(' ')).join(' ');
      let MaybeRankDir = 'rankdir=LR;';
      return `digraph G {\n${MaybeRankDir}  fontname="Open Sans";\n  style=filled;\n  bgcolor="${vc('graph_bg_color')}";\n  node [fontsize=14; shape=box; style=filled; fillcolor=white; fontname="Times New Roman"];\n  edge [fontsize=6;fontname="Open Sans"];\n\n  ${nodes}\n\n  ${edges}\n}`;
  }

  exports.dot = dot;
  exports.dot_to_svg = dot_to_svg;
  exports.svg_el = svg_el;
  exports.png_el = png_el;
  exports.vizjs = vizjs;

  return exports;

}({}));
//# sourceMappingURL=jssm-viz.iife.js.map
