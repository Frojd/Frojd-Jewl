import React from 'react';
import SkipToContent from './SkipToContent';
import data from './SkipToContent.data';
import readme from './SkipToContent.md';

const Story = {
    component: SkipToContent,
    parameters: {
        docs: { description: { component: readme } },
    },
};
export default Story;

const Template = (args) => <SkipToContent {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
