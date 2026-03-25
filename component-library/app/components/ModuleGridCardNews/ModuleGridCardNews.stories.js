import React from 'react';
import Component from './ModuleGridCardNews';
import data from './ModuleGridCardNews.data';
import readme from './ModuleGridCardNews.md';

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
