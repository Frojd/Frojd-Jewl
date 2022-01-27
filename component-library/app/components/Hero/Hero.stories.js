import React from 'react';
import Hero from './Hero';
import data from './Hero.data';
import readme from './Hero.md';

export default {
    title: 'Components/Hero',
    component: Hero,
    parameters: {
        docs: {description: {component: readme}}
    },
};

const Template = (args) => <Hero {...data} {...args} />;

export const Default = Template.bind({});
