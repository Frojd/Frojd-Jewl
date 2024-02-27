import React from 'react';
import AccordionItem from './AccordionItem';
import data from './AccordionItem.data';
import readme from './AccordionItem.md';

export default {
    component: AccordionItem,
    parameters: {
        docs: { description: { component: readme } },
    },
};

const Template = (args) => <AccordionItem {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };

export const List = (args) => (
    <div>
        <AccordionItem {...args} />
        <AccordionItem {...args} />
        <AccordionItem {...args} />
    </div>
);
List.args = { ...data };
