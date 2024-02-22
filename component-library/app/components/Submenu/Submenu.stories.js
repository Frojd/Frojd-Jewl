import React from 'react';
import Submenu from './Submenu';
import data from './Submenu.data';
import readme from './Submenu.md';

export default {
    component: Submenu,
    parameters: {
        docs: { description: { component: readme } },
    },
};

const Template = (args) => <Submenu {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
