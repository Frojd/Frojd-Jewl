import * as React from 'react';
import {
  withKnobs,
  text,
} from '@storybook/addon-knobs';

import Accordian from './Accordian';
import markdown from './Accordian.md';
import data from './Accordian.data';

export default {
    title: 'Components|Accordian',
    decorators: [withKnobs],
};

export const emptyComp = () => <Accordian />;

export const dataComp = () => <Accordian {...data} />;

export const dynamicComp = () => (
    <Accordian
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