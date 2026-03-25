import React from 'react';
import Header from './Header';
import data from './Header.data';
import readme from './Header.md';

const Story = {
    component: Header,
    parameters: {
        docs: { description: { component: readme } },
    },
};
export default Story;

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
