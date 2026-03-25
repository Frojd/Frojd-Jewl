import React from 'react';
import Component from './ContentButtons';
import data from './ContentButtons.data';
import readme from './ContentButtons.md';

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
