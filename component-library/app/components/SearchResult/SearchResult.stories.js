import React from 'react';
import SearchResult from './SearchResult';
import data from './SearchResult.data';
import readme from './SearchResult.md';

const Story = {
    component: SearchResult,
    parameters: {
        docs: { description: { component: readme } },
    },
};
export default Story;

const Template = (args) => <SearchResult {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
