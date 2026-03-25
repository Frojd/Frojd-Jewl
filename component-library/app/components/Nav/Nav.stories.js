import React from 'react';
import Nav from './Nav';
import data, { withChildren } from './Nav.data';
import readme from './Nav.md';

const Story = {
    component: Nav,
    parameters: {
        docs: { description: { component: readme } },
    },
    argTypes: {
        orientation: {
            defaultValue: 'Horizontal',
            options: ['Horizontal', 'Vertical'],
            control: { type: 'select' },
        },
        modifier: {
            options: ['', 'Main', 'Mobile', 'Submenu'],
            control: { type: 'select' },
        },
        items: { control: { type: null } },
    },
};
export default Story;

const Template = (args) => <Nav {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };

export const WithChildren = Template.bind({});
WithChildren.args = { ...withChildren };
