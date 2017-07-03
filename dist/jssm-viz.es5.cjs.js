require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"jssm-viz":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var version = '0.5.0'; // replaced from package.js in build


var viz = function viz(jssm) {
  // whargarbl jssm isn't an any

  var l_states = jssm.states();

  var node_of = function node_of(state) {
    return 'n' + l_states.indexOf(state);
  },
      vc = function vc(col) {
    return jssm._viz_colors[col] || '';
  };

  var nodes = l_states.map(function (s) {

    var this_state = jssm.state_for(s),
        terminal = jssm.state_is_terminal(s),
        final = jssm.state_is_final(s),
        complete = jssm.state_is_complete(s),
        features = [['label', s], ['peripheries', complete ? 2 : 1], ['fillcolor', final ? vc('fill_final') : complete ? vc('fill_complete') : terminal ? vc('fill_terminal') : '']].filter(function (r) {
      return r[1];
    }).map(function (r) {
      return r[0] + '="' + r[1] + '"';
    }).join(' ');
    return node_of(s) + ' [' + features + '];';
  }).join(' ');

  var strike = [];
  var edges = jssm.states().map(function (s) {
    return jssm.list_exits(s).map(function (ex) {

      if (strike.find(function (row) {
        return row[0] === s && row[1] == ex;
      })) {
        return ''; // already did the pair
      }

      var edge = jssm.list_transitions(s, ex),
          pair = jssm.list_transitions(ex, s),
          double = pair && s !== ex,
          head_state = jssm.state_for(s),
          tail_state = jssm.state_for(ex),


      //          label        = edge  ? ([edge.name?`${(edge.name:any)}`:undefined,`${(edge.probability:any)}`]
      //                                 .filter(not_undef => !!not_undef)
      //                                   .join('\n') || undefined
      //                                  ) : undefined,

      if_obj_field = function if_obj_field(obj, field) {
        return obj ? obj[field] || '' : '';
      },
          h_final = jssm.state_is_final(s),
          h_complete = jssm.state_is_complete(s),
          h_terminal = jssm.state_is_terminal(s),
          t_final = jssm.state_is_final(ex),
          t_complete = jssm.state_is_complete(ex),
          t_terminal = jssm.state_is_terminal(ex),
          lineColor = function lineColor(final, complete, terminal) {
        var _solo_1_2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '_solo';

        return final ? vc('line_final' + _solo_1_2) : complete ? vc('line_complete' + _solo_1_2) : terminal ? vc('line_terminal' + _solo_1_2) : vc('normal_line' + _solo_1_2);
      },
          textColor = function textColor(final, complete, terminal) {
        var _solo_1_2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '_solo';

        return final ? vc('text_final' + _solo_1_2) : complete ? vc('text_complete' + _solo_1_2) : terminal ? vc('text_terminal' + _solo_1_2) : '';
      },
          headColor = textColor(h_final, h_complete, h_terminal, double ? '_1' : '_solo'),
          tailColor = textColor(t_final, t_complete, t_terminal, double ? '_2' : '_solo'),
          labelInline = [
      //                           [edge, 'name',        'label',     true],
      [pair, 'probability', 'headlabel', 'name', 'action', double, headColor], [edge, 'probability', 'taillabel', 'name', 'action', true, tailColor]].map(function (r) {
        return { which: r[2], whether: r[5] ? [if_obj_field(r[0], r[5]), if_obj_field(r[0], r[1]), if_obj_field(r[0], r[3])].filter(function (q) {
            return q;
          }).join('<br/>') || '' : '', color: r[6] };
      }).filter(function (present) {
        return present.whether;
      }).map(function (r) {
        return r.which + '=' + (r.color ? '<<font color="' + r.color + '">' + r.whether + '</font>>' : '"' + r.whether + '"') + ';';
      }).join(' '),
          tc1 = lineColor(t_final, t_complete, t_terminal, '_1'),
          tc2 = lineColor(h_final, h_complete, h_terminal, '_2'),
          tcd = lineColor(t_final, t_complete, t_terminal, '_solo'),
          edgeInline = edge ? double ? 'dir=both;color="' + tc1 + ':' + tc2 + '"' : 'color="' + tcd + '"' : '';

      if (pair) {
        strike.push([ex, s]);
      }

      return node_of(s) + '->' + node_of(ex) + ' [' + labelInline + edgeInline + '];';
    }).join(' ');
  }).join(' ');

  return 'digraph G {\n  fontname="helvetica neue";\n  style=filled;\n  bgcolor=lightgrey;\n  node [fontsize=14; shape=box; style=filled; fillcolor=white; fontname="helvetica neue"];\n  edge [fontsize=6;fontname="helvetica neue"];\n\n  ' + nodes + '\n\n  ' + edges + '\n}';
};

exports.viz = viz;

},{}]},{},[]);
