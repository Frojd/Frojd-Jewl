import React from 'react';
import CardCTA from './CardCTA';
import data from './CardCTA.data';
import readme from './CardCTA.md';

const Story = {
    component: CardCTA,
    parameters: {
        docs: { description: { component: readme } },
    },
};
export default Story;

const Template = (args) => <CardCTA {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
