import React from 'react';
import Header from './Header';
import data from './Header.data';
import readme from './Header.md';

export default {
    title: 'Components/Header',
    component: Header,
    parameters: {
        docs: {description: {component: readme}}
    },
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {...data};
