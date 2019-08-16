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

const reqComponents = require.context('../app/components', true, /\.stories\.js$/);
// const reqContainers = require.context('../app/containers', true, /\.stories\.js$/);

function loadStories() {
    reqComponents.keys().forEach(filename => reqComponents(filename));
    // reqContainers.keys().forEach(filename => reqContainers(filename));
}

configure(loadStories, module);
