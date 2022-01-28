import React from 'react';
import Nav from './Nav';
import data, {withChildren} from './Nav.data';
import readme from './Nav.md';

export default {
    title: 'Components/Nav',
    component: Nav,
    parameters: {
        docs: {description: {component: readme}}
    },
};

const Template = (args) => <Nav {...args} />;

export const Default = Template.bind({});
Default.args = {...data};

export const WithChildren = Template.bind({});
WithChildren.args = {...withChildren};
