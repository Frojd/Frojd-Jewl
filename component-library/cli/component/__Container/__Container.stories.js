import React from 'react';
import __Container from './__Container';
import data from './__Container.data';
import readme from './__Container.md';

export default {
    title: 'Components/__Container',
    component: __Container,
    parameters: {
        docs: {description: {component: readme}}
    },
};

const Template = (args) => <__Container {...data} {...args} />;

export const Default = Template.bind({});
