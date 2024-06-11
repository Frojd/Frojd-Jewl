import React from 'react';
import Component from './__Component__';
import data from './__Component__.data';
import readme from './__Component__.md';

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
