import React from 'react';
import Hero from './Hero';
import data from './Hero.data';
import readme from './Hero.md';

export default {
    component: Hero,
    parameters: {
        docs: { description: { component: readme } },
    },
};

const Template = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
