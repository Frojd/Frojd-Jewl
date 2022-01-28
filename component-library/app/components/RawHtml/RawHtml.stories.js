import React from 'react';
import RawHtml from './RawHtml';
import data from './RawHtml.data';
import readme from './RawHtml.md';

export default {
    component: RawHtml,
    parameters: {
        docs: {description: {component: readme}}
    },
};

const Template = (args) => <RawHtml {...data} {...args} />;

export const Default = Template.bind({});
