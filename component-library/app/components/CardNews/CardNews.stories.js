import React from 'react';
import CardNews from './CardNews';
import data from './CardNews.data';
import readme from './CardNews.md';

const Story = {
    component: CardNews,
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

const Template = (args) => <CardNews {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
