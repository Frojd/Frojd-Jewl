import React from 'react';
import ContentCTA from './ContentCTA';
import data from './ContentCTA.data';
import readme from './ContentCTA.md';

const Story = {
    component: ContentCTA,
    parameters: {
        docs: { description: { component: readme } },
    },
};
export default Story;

const Template = (args) => <ContentCTA {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
