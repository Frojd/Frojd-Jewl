import * as React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Popup from './Popup';
import markdown from './Popup.md';
import data from './Popup.data.js';

export default { title: 'Components|Popup', decorators: [withKnobs] };

export const emptyComp = () => <Popup />;

export const dataComp = () => <Popup {...data} />;

export const dynamicComp = () => (
    <Popup
        title={text('Title', data.title)}
        richtext={text('Richtext', data.richtext)}
    />
);

emptyComp.story = {
    name: 'Empty',
    parameters: {
        notes: { markdown: markdown },
    },
};
dataComp.story = {
    name: 'With data',
    parameters: {
        notes: { markdown: markdown },
    },
};
dynamicComp.story = {
    name: 'Dynamic',
    parameters: {
        notes: { markdown: markdown },
        knobs: { escapeHTML: false },
    },
};
