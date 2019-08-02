function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: blue;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from 'styled-components';
export var MyDiv = styled.div(_templateObject());
export default MyDiv;