import React from 'react';
import SearchBar from './SearchBar';
import data from './SearchBar.data';
import readme from './SearchBar.md';

const Story = {
    component: SearchBar,
    parameters: {
        docs: { description: { component: readme } },
    },
};
export default Story;

const Template = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
