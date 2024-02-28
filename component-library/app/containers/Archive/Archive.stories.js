import React from 'react';
import Archive from './Archive';
import data from './Archive.data';
import readme from './Archive.md';

const Story = {
    component: Archive,
    parameters: {
        docs: { description: { component: readme } },
    },
};
export default Story;

const Template = (args) => <Archive {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
