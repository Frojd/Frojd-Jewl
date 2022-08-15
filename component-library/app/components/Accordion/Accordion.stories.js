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

const Template = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {...data};

export const List = (args) => (
    <div>
        <Accordion {...args} />
        <Accordion {...args} />
        <Accordion {...args} />
    </div>
);
List.args = {...data};