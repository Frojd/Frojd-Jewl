import React from 'react';
import Component from './ContentBlockquote';
import data from './ContentBlockquote.data';
import readme from './ContentBlockquote.md';

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
