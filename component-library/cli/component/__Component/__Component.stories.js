import React from 'react';
import __Component from './__Component';
import data from './__Component.data';
import readme from './__Component.md';

export default {
    title: 'Components/__Component',
    component: __Component,
    parameters: {
        docs: {description: {component: readme}}
    },
};

const Template = (args) => <__Component {...args} />;

export const Default = Template.bind({});
Default.args = {...data};
