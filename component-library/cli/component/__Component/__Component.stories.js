import React from 'react';
import __Component from './__Component';
import data from './__Component.data';
import readme from './__Component.md';

const Story = {
    component: __Component,
    parameters: {
        docs: { description: { component: readme } },
    },
};
export default Story;

const Template = (args) => <__Component {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
