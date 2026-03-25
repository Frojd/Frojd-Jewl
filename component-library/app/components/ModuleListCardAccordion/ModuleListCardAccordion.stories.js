import React from 'react';
import Component from './ModuleListCardAccordion';
import data from './ModuleListCardAccordion.data';
import readme from './ModuleListCardAccordion.md';

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
