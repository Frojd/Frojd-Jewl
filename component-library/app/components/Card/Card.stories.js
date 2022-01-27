import React from 'react';
import Card from './Card';
import data from './Card.data';
import readme from './Card.md';

export default {
    title: 'Components/Card',
    component: Card,
    parameters: {
        docs: {description: {component: readme}}
    },
};

const Template = (args) => <Card {...data} {...args} />;

export const Default = Template.bind({});
