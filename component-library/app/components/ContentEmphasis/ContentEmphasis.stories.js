import React from 'react';
import Component from './ContentEmphasis';
import data from './ContentEmphasis.data';
import readme from './ContentEmphasis.md';

const Story = {
    component: Component,
    parameters: {
        docs: { description: { component: readme } },
    },
};
export default Story;

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
