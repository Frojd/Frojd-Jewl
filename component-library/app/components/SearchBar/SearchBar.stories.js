import React from 'react';
import SearchBar from './SearchBar';
import data from './SearchBar.data';
import readme from './SearchBar.md';

export default {
    component: SearchBar,
    parameters: {
        docs: { description: { component: readme } },
    },
};

const Template = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
