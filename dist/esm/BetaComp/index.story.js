import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { BetaComp } from './index';
var stories = storiesOf('BetaComp', module);
stories.addDecorator(withKnobs);
stories.add('with types', withInfo()(function () {
  return React.createElement(BetaComp, null);
}));