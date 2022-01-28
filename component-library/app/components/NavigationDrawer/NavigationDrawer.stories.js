import React from 'react';
import NavigationDrawer from './NavigationDrawer';
import data, {withNav} from './NavigationDrawer.data';
import readme from './NavigationDrawer.md';

export default {
    component: NavigationDrawer,
    parameters: {
        docs: {description: {component: readme}}
    },
    argTypes: {
        children: {control: {type: null}},
    },
};

const Template = (args) => <NavigationDrawer {...args} />;

export const Default = Template.bind({});
Default.args = {...data};

export const WithNav = Template.bind({});
WithNav.args = {...withNav};
