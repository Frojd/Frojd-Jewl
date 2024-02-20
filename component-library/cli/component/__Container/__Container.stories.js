import React from 'react';
import __Container from './__Container';
import data from './__Container.data';
import readme from './__Container.md';

const Story = {
    component: __Container,
    parameters: {
        docs: {description: {component: readme}}
    },
};
export default Story;

const Template = (args) => <__Container {...args} />;

export const Default = Template.bind({});
Default.args = {...data};
