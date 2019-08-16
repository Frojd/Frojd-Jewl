import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(
    withInfo({
        inline: false,
    })
);
addDecorator(
    withKnobs
);

const reqComponents = require.context('../app/components', true, /\.stories\.js$/);
const reqContainers = require.context('../app/containers', true, /\.stories\.js$/);

function loadStories() {
    reqComponents.keys().forEach(filename => reqComponents(filename));
    reqContainers.keys().forEach(filename => reqContainers(filename));
}

configure(loadStories, module);
