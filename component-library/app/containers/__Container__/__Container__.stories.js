import React from 'react';
import Container from './__Container__';
import data from './__Container__.data';
import readme from './__Container__.md';

const Story = {
    component: Container,
    parameters: {
        docs: { description: { component: readme } },
    },
};
export default Story;

const Template = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
