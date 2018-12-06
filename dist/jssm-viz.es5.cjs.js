'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/*
Viz.js 2.0.0 (Graphviz 2.40.1, Expat 2.2.5, Emscripten 1.37.36)
Copyright (c) 2014-2018 Michael Daines
Licensed under MIT license

This distribution contains other software in object code form:

Graphviz
Licensed under Eclipse Public License - v 1.0
http://www.graphviz.org

Expat
Copyright (c) 1998, 1999, 2000 Thai Open Source Software Center Ltd and Clark Cooper
Copyright (c) 2001, 2002, 2003, 2004, 2005, 2006 Expat maintainers.
Licensed under MIT license
http://www.libexpat.org

zlib
Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
http://www.zlib.net/zlib_license.html
*/
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var WorkerWrapper = function () {
  function WorkerWrapper(worker) {
    var _this = this;

    classCallCheck(this, WorkerWrapper);

    this.worker = worker;
    this.listeners = [];
    this.nextId = 0;

    this.worker.addEventListener('message', function (event) {
      var id = event.data.id;
      var error = event.data.error;
      var result = event.data.result;

      _this.listeners[id](error, result);
      delete _this.listeners[id];
    });
  }

  createClass(WorkerWrapper, [{
    key: 'render',
    value: function render(src, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        var id = _this2.nextId++;

        _this2.listeners[id] = function (error, result) {
          if (error) {
            reject(new Error(error.message, error.fileName, error.lineNumber));
            return;
          }
          resolve(result);
        };

        _this2.worker.postMessage({ id: id, src: src, options: options });
      });
    }
  }]);
  return WorkerWrapper;
}();

var ModuleWrapper = function ModuleWrapper(module, render) {
  classCallCheck(this, ModuleWrapper);

  var instance = module();
  this.render = function (src, options) {
    return new Promise(function (resolve, reject) {
      try {
        resolve(render(instance, src, options));
      } catch (error) {
        reject(error);
      }
    });
  };
};

// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding


function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

function defaultScale() {
  if ('devicePixelRatio' in window && window.devicePixelRatio > 1) {
    return window.devicePixelRatio;
  } else {
    return 1;
  }
}

function svgXmlToImageElement(svgXml) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$scale = _ref.scale,
      scale = _ref$scale === undefined ? defaultScale() : _ref$scale,
      _ref$mimeType = _ref.mimeType,
      mimeType = _ref$mimeType === undefined ? "image/png" : _ref$mimeType,
      _ref$quality = _ref.quality,
      quality = _ref$quality === undefined ? 1 : _ref$quality;

  return new Promise(function (resolve, reject) {
    var svgImage = new Image();

    svgImage.onload = function () {
      var canvas = document.createElement('canvas');
      canvas.width = svgImage.width * scale;
      canvas.height = svgImage.height * scale;

      var context = canvas.getContext("2d");
      context.drawImage(svgImage, 0, 0, canvas.width, canvas.height);

      canvas.toBlob(function (blob) {
        var image = new Image();
        image.src = URL.createObjectURL(blob);
        image.width = svgImage.width;
        image.height = svgImage.height;

        resolve(image);
      }, mimeType, quality);
    };

    svgImage.onerror = function (e) {
      var error;

      if ('error' in e) {
        error = e.error;
      } else {
        error = new Error('Error loading SVG');
      }

      reject(error);
    };

    svgImage.src = 'data:image/svg+xml;base64,' + b64EncodeUnicode(svgXml);
  });
}

function svgXmlToImageElementFabric(svgXml) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$scale = _ref2.scale,
      scale = _ref2$scale === undefined ? defaultScale() : _ref2$scale,
      _ref2$mimeType = _ref2.mimeType,
      mimeType = _ref2$mimeType === undefined ? 'image/png' : _ref2$mimeType,
      _ref2$quality = _ref2.quality,
      quality = _ref2$quality === undefined ? 1 : _ref2$quality;

  var multiplier = scale;

  var format = void 0;
  if (mimeType == 'image/jpeg') {
    format = 'jpeg';
  } else if (mimeType == 'image/png') {
    format = 'png';
  }

  return new Promise(function (resolve, reject) {
    fabric.loadSVGFromString(svgXml, function (objects, options) {
      // If there's something wrong with the SVG, Fabric may return an empty array of objects. Graphviz appears to give us at least one <g> element back even given an empty graph, so we will assume an error in this case.
      if (objects.length == 0) {
        reject(new Error('Error loading SVG with Fabric'));
      }

      var element = document.createElement("canvas");
      element.width = options.width;
      element.height = options.height;

      var canvas = new fabric.Canvas(element, { enableRetinaScaling: false });
      var obj = fabric.util.groupSVGElements(objects, options);
      canvas.add(obj).renderAll();

      var image = new Image();
      image.src = canvas.toDataURL({ format: format, multiplier: multiplier, quality: quality });
      image.width = options.width;
      image.height = options.height;

      resolve(image);
    });
  });
}

var Viz = function () {
  function Viz() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        workerURL = _ref3.workerURL,
        worker = _ref3.worker,
        Module = _ref3.Module,
        render = _ref3.render;

    classCallCheck(this, Viz);

    if (typeof workerURL !== 'undefined') {
      this.wrapper = new WorkerWrapper(new Worker(workerURL));
    } else if (typeof worker !== 'undefined') {
      this.wrapper = new WorkerWrapper(worker);
    } else if (typeof Module !== 'undefined' && typeof render !== 'undefined') {
      this.wrapper = new ModuleWrapper(Module, render);
    } else if (typeof Viz.Module !== 'undefined' && typeof Viz.render !== 'undefined') {
      this.wrapper = new ModuleWrapper(Viz.Module, Viz.render);
    } else {
      throw new Error('Must specify workerURL or worker option, Module and render options, or include one of full.render.js or lite.render.js after viz.js.');
    }
  }

  createClass(Viz, [{
    key: 'renderString',
    value: function renderString(src) {
      var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref4$format = _ref4.format,
          format = _ref4$format === undefined ? 'svg' : _ref4$format,
          _ref4$engine = _ref4.engine,
          engine = _ref4$engine === undefined ? 'dot' : _ref4$engine,
          _ref4$files = _ref4.files,
          files = _ref4$files === undefined ? [] : _ref4$files,
          _ref4$images = _ref4.images,
          images = _ref4$images === undefined ? [] : _ref4$images,
          _ref4$yInvert = _ref4.yInvert,
          yInvert = _ref4$yInvert === undefined ? false : _ref4$yInvert;

      for (var i = 0; i < images.length; i++) {
        files.push({
          path: images[i].path,
          data: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="' + images[i].width + '" height="' + images[i].height + '"></svg>'
        });
      }

      return this.wrapper.render(src, { format: format, engine: engine, files: files, images: images, yInvert: yInvert });
    }
  }, {
    key: 'renderSVGElement',
    value: function renderSVGElement(src) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.renderString(src, _extends({}, options, { format: 'svg' })).then(function (str) {
        var parser = new DOMParser();
        return parser.parseFromString(str, 'image/svg+xml').documentElement;
      });
    }
  }, {
    key: 'renderImageElement',
    value: function renderImageElement(src) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var scale = options.scale,
          mimeType = options.mimeType,
          quality = options.quality;


      return this.renderString(src, _extends({}, options, { format: 'svg' })).then(function (str) {
        if ((typeof fabric === 'undefined' ? 'undefined' : _typeof(fabric)) === "object" && fabric.loadSVGFromString) {
          return svgXmlToImageElementFabric(str, { scale: scale, mimeType: mimeType, quality: quality });
        } else {
          return svgXmlToImageElement(str, { scale: scale, mimeType: mimeType, quality: quality });
        }
      });
    }
  }, {
    key: 'renderJSONObject',
    value: function renderJSONObject(src) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var format = options.format;


      if (format !== 'json' || format !== 'json0') {
        format = 'json';
      }

      return this.renderString(src, _extends({}, options, { format: format })).then(function (str) {
        return JSON.parse(str);
      });
    }
  }]);
  return Viz;
}();

var jssmViz_es5 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vizjs = exports.png_el = exports.svg_el = exports.dot_to_svg = exports.dot = void 0;



exports.vizjs = Viz;
var default_viz_colors = {
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

var dot_to_svg = function dot_to_svg(dot, config) {
  // whargarbl jssm isn't an any
  return Viz(dot, config);
};

exports.dot_to_svg = dot_to_svg;

var svg_el = function svg_el(dot, config) {
  return new DOMParser().parseFromString(dot_to_svg(dot, config), 'text/html');
};

exports.svg_el = svg_el;

var png_el = function png_el(dot, config) {
  // whargarbl jssm isn't an any // whargarbl should return an image element, not a string
  var cfg = Object.assign({}, config, {
    format: "png-image-element"
  });
  return Viz(dot, cfg);
};

exports.png_el = png_el;

var dot = function dot(jssm) {
  // whargarbl jssm isn't an any
  var l_states = jssm.states();

  var node_of = function node_of(state) {
    return "n".concat(l_states.indexOf(state));
  },
      vc = function vc(col) {
    return default_viz_colors[col] || '';
  }; // todo make these configurable


  var nodes = l_states.map(function (s) {
    var this_state = jssm.state_for(s),
        terminal = jssm.state_is_terminal(s),
        final = jssm.state_is_final(s),
        complete = jssm.state_is_complete(s),
        features = [['label', s], ['peripheries', complete ? 2 : 1], ['fillcolor', final ? vc('fill_final') : complete ? vc('fill_complete') : terminal ? vc('fill_terminal') : '']].filter(function (r) {
      return r[1];
    }).map(function (r) {
      return "".concat(r[0], "=\"").concat(r[1], "\"");
    }).join(' ');
    return "".concat(node_of(s), " [").concat(features, "];");
  }).join(' ');
  var strike = [];
  var edges = jssm.states().map(function (s) {
    return jssm.list_exits(s).map(function (ex) {
      if (strike.find(function (row) {
        return row[0] === s && row[1] == ex;
      })) {
        return ''; // already did the pair
      }

      var doublequote = function doublequote(txt) {
        return txt.replace('"', '\\"');
      };

      var edge = jssm.list_transitions(s, ex),
          edge_id = jssm.get_transition_by_state_names(s, ex),
          edge_tr = jssm.lookup_transition_for(s, ex),
          pair = jssm.list_transitions(ex, s),
          pair_id = jssm.get_transition_by_state_names(ex, s),
          pair_tr = jssm.lookup_transition_for(ex, s),
          double = pair_id && s !== ex,
          head_state = jssm.state_for(s),
          tail_state = jssm.state_for(ex),
          if_obj_field = function if_obj_field(obj, field) {
        return obj ? obj[field] || '' : '';
      },
          h_final = jssm.state_is_final(s),
          h_complete = jssm.state_is_complete(s),
          h_terminal = jssm.state_is_terminal(s),
          t_final = jssm.state_is_final(ex),
          t_complete = jssm.state_is_complete(ex),
          t_terminal = jssm.state_is_terminal(ex),
          lineColor = function lineColor(final, complete, terminal, lkind) {
        var _solo_1_2 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '_solo';

        return final ? vc("".concat(lkind, "_final") + _solo_1_2) : complete ? vc("".concat(lkind, "_complete") + _solo_1_2) : terminal ? vc("".concat(lkind, "_terminal") + _solo_1_2) : vc("".concat(lkind) + _solo_1_2);
      },
          textColor = function textColor(final, complete, terminal) {
        var _solo_1_2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '_solo';

        return final ? vc('text_final' + _solo_1_2) : complete ? vc('text_complete' + _solo_1_2) : terminal ? vc('text_terminal' + _solo_1_2) : '';
      },
          headColor = textColor(h_final, h_complete, h_terminal, double ? '_1' : '_solo'),
          tailColor = textColor(t_final, t_complete, t_terminal, double ? '_2' : '_solo'),
          labelInline = [//                             [edge, 'name',        'label',     true],
      [pair, 'probability', 'headlabel', 'name', 'action', double, headColor], [edge, 'probability', 'taillabel', 'name', 'action', true, tailColor]].map(function (r) {
        return {
          which: r[2],
          whether: r[5] ? [if_obj_field(r[0], r[5]), if_obj_field(r[0], r[1]), if_obj_field(r[0], r[3])].filter(function (q) {
            return q;
          }).join('<br/>') || '' : '',
          color: r[6]
        };
      }).filter(function (present) {
        return present.whether;
      }).map(function (r) {
        return "".concat(r.which, "=").concat(r.color ? "<<font color=\"".concat(r.color, "\">").concat(r.whether, "</font>>") : "\"".concat(r.whether, "\""), ";");
      }).join(' '),
          //          label          = edge_tr ? ( nlJoinIfAny([edge_tr.action, edge_tr.probability]) ) : undefined,
      label = edge_tr ? ["".concat(edge_tr.action || ''), "".concat(edge_tr.probability || '')].filter(function (not_empty) {
        return not_empty !== '';
      }).join('\n') || undefined : undefined,
          maybeLabel = label ? "taillabel=\"".concat(doublequote(label), "\";") : '',
          rlabel = pair_tr ? ["".concat(pair_tr.action || ''), "".concat(pair_tr.probability || '')].filter(function (not_empty) {
        return not_empty !== '';
      }).join('\n') || undefined : undefined,
          maybeRLabel = rlabel ? "headlabel=\"".concat(doublequote(rlabel), "\";") : '',
          tc1 = lineColor(t_final, t_complete, t_terminal, edge_tr.kind, '_1'),
          tc2 = lineColor(h_final, h_complete, h_terminal, (pair_tr || {}).kind, '_2'),
          tcd = lineColor(t_final, t_complete, t_terminal, edge_tr.kind, '_solo'),
          arrowHead = edge_tr.forced_only ? 'ediamond' : edge_tr.main_path ? 'normal;weight=5' : 'empty',
          arrowTail = pair_tr ? pair_tr.forced_only ? 'ediamond' : pair_tr.main_path ? 'normal;weight=5' : 'empty' : '',
          edgeInline = edge ? double ? "".concat(maybeLabel).concat(maybeRLabel, "arrowhead=").concat(arrowHead, ";arrowtail=").concat(arrowTail, ";dir=both;color=\"").concat(tc1, ":").concat(tc2, "\"") : "".concat(maybeLabel, "arrowhead=").concat(arrowHead, ";color=\"").concat(tcd, "\"") : '';

      if (pair) {
        strike.push([ex, s]);
      }

      return "".concat(node_of(s), "->").concat(node_of(ex), " [").concat(labelInline).concat(edgeInline, "];");
    }).join(' ');
  }).join(' '); // todo lol just do this right, jerk

  var MaybeRankDir = window ? window.lrGViz ? 'rankdir=LR;' : '' : '';
  return "digraph G {\n".concat(MaybeRankDir, "  fontname=\"Open Sans\";\n  style=filled;\n  bgcolor=\"").concat(vc('graph_bg_color'), "\";\n  node [fontsize=14; shape=box; style=filled; fillcolor=white; fontname=\"Times New Roman\"];\n  edge [fontsize=6;fontname=\"Open Sans\"];\n\n  ").concat(nodes, "\n\n  ").concat(edges, "\n}");
};

exports.dot = dot;

});

var jssmViz_es5$1 = unwrapExports(jssmViz_es5);
var jssmViz_es5_1 = jssmViz_es5.vizjs;
var jssmViz_es5_2 = jssmViz_es5.png_el;
var jssmViz_es5_3 = jssmViz_es5.svg_el;
var jssmViz_es5_4 = jssmViz_es5.dot_to_svg;
var jssmViz_es5_5 = jssmViz_es5.dot;

exports.default = jssmViz_es5$1;
exports.vizjs = jssmViz_es5_1;
exports.png_el = jssmViz_es5_2;
exports.svg_el = jssmViz_es5_3;
exports.dot_to_svg = jssmViz_es5_4;
exports.dot = jssmViz_es5_5;
//# sourceMappingURL=jssm-viz.es5.cjs.js.map
