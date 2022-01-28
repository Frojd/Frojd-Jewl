import React from 'react';
import Accordion from './Accordion';
import data from './Accordion.data';
import readme from './Accordion.md';

export default {
    component: Accordion,
    parameters: {
        docs: {description: {component: readme}}
    },
};

const Template = (args) => <Accordion {...data} {...args} />;

export const Default = Template.bind({});
