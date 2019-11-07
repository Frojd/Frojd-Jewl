import * as React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Card from './Card';
import markdown from './Card.md';
import data from './Card.data.js';

export default { title: 'Components|Card', decorators: [withKnobs] };

export const emptyComp = () => <Card />;

export const dataComp = () => <Card {...data} />;

export const dynamicComp = () => <Card title={text('Title', data.title)} />;

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
