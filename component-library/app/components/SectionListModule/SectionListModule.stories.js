import React from 'react';
import Component from './SectionListModule';
import data from './SectionListModule.data';
import readme from './SectionListModule.md';

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
