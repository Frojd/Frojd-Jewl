import React from 'react';
import Follow from './Follow';
import data from './Follow.data';
import readme from './Follow.md';

const Story = {
    component: Follow,
    parameters: {
        docs: { description: { component: readme } },
    },
};
export default Story;

const Template = (args) => <Follow {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
