import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import '@storybook/addon-console';

addDecorator(
    withInfo({
        inline: false,
    })
);
addDecorator(
    withKnobs
);
addDecorator(withA11y);

const loadStories = () => {
  const req = require.context('../app/components', true, /\.stories\.js$/);
  return req.keys().map(fname => req(fname));
};

configure(loadStories, module);
