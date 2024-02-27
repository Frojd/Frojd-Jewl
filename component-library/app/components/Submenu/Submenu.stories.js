import React from 'react';
import Submenu from './Submenu';
import data from './Submenu.data';
import readme from './Submenu.md';

const Story = {
    component: Submenu,
    parameters: {
        docs: { description: { component: readme } },
    },
};
export default Story;

const Template = (args) => <Submenu {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
