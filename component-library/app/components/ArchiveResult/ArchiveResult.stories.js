import React from 'react';
import ArchiveResult from './ArchiveResult';
import data from './ArchiveResult.data';
import readme from './ArchiveResult.md';

const Story = {
    component: ArchiveResult,
    parameters: {
        docs: { description: { component: readme } },
    },
};
export default Story;

const Template = (args) => <ArchiveResult {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
