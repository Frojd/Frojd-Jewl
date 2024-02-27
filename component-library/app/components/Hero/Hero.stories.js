import React from 'react';
import Hero from './Hero';
import data from './Hero.data';
import readme from './Hero.md';

const Story = {
    component: Hero,
    parameters: {
        docs: { description: { component: readme } },
    },
};
export default Story;

const Template = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
