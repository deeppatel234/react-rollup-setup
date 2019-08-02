"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonInfo = require("@storybook/addon-info");

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('BetaComp', module);
stories.addDecorator(_addonKnobs.withKnobs);
stories.add('with types', (0, _addonInfo.withInfo)()(function () {
  return _react["default"].createElement(_index.BetaComp, null);
}));