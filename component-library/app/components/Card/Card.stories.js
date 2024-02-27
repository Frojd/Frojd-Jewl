import React from 'react';
import Card from './Card';
import data from './Card.data';
import readme from './Card.md';

const Story = {
    component: Card,
    parameters: {
        docs: { description: { component: readme } },
    },
};
export default Story;

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
