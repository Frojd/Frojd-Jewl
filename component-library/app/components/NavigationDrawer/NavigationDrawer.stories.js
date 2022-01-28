import React from 'react';
import NavigationDrawer from './NavigationDrawer';
import data from './NavigationDrawer.data';
import readme from './NavigationDrawer.md';

export default {
    component: NavigationDrawer,
    parameters: {
        docs: {description: {component: readme}}
    },
};

const Template = (args) => <NavigationDrawer {...data} {...args} />;

export const Default = Template.bind({});
