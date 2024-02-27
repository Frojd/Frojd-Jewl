import React from 'react';
import Search from './Search';
import data from './Search.data';
import readme from './Search.md';

export default {
    component: Search,
    parameters: {
        docs: { description: { component: readme } },
    },
};

const Template = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
