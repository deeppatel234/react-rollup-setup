(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('styled-components')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'styled-components'], factory) :
  (global = global || self, factory(global.ReactRollup = {}, global.React, global.styled));
}(this, function (exports, React, styled) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;
  styled = styled && styled.hasOwnProperty('default') ? styled['default'] : styled;

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  function _templateObject() {
    var data = _taggedTemplateLiteral(["\n  color: yellow;\n"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }
  var MyDiv = styled.div(_templateObject());

  var AlphaComp = function AlphaComp() {
    return React.createElement(MyDiv, null, "AlphaComp");
  };

  function _templateObject$1() {
    var data = _taggedTemplateLiteral(["\n  color: blue;\n"]);

    _templateObject$1 = function _templateObject() {
      return data;
    };

    return data;
  }
  var MyDiv$1 = styled.div(_templateObject$1());

  var BetaComp = function BetaComp() {
    return React.createElement(MyDiv$1, null, "BetaComp");
  };

  exports.AlphaComp = AlphaComp;
  exports.BetaComp = BetaComp;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
