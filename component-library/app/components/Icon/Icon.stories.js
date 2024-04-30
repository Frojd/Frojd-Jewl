import React from 'react';
import Icon from './Icon';
import data from './Icon.data';
import readme from './Icon.md';

const Story = {
    component: Icon,
    parameters: {
        docs: { description: { component: readme } },
    },
};
export default Story;

const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
