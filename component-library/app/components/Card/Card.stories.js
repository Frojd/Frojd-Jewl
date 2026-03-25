import React from 'react';
import Card from './Card';
import data, { fullSize } from './Card.data';
import readme from './Card.md';

const Story = {
    component: Card,
    parameters: {
        docs: { description: { component: readme } },
    },
    args: {
        size: '',
    },
    argTypes: {
        size: {
            options: ['None', 'Full', 'Half', 'Third', 'Fourth'],
            control: { type: 'select' },
        },
    },
};
export default Story;

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };

export const Full = Template.bind({});
Full.args = { ...fullSize };
