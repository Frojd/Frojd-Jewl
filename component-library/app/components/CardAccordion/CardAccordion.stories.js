import React from 'react';
import CardAccordion from './CardAccordion';
import data from './CardAccordion.data';
import readme from './CardAccordion.md';

const Story = {
    component: CardAccordion,
    parameters: {
        docs: { description: { component: readme } },
    },
};
export default Story;

const Template = (args) => <CardAccordion {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };

export const List = (args) => (
    <div>
        <CardAccordion {...args} />
        <CardAccordion {...args} />
        <CardAccordion {...args} />
    </div>
);
List.args = { ...data };
