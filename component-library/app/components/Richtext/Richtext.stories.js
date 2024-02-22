import React from 'react';
import Richtext from './Richtext';
import data from './Richtext.data';
import readme from './Richtext.md';

export default {
    component: Richtext,
    parameters: {
        docs: { description: { component: readme } },
    },
};

const Template = (args) => <Richtext {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
