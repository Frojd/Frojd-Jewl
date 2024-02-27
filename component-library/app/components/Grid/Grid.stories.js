import React from 'react';
import Grid from './Grid';
import data from './Grid.data';
import readme from './Grid.md';

const Story = {
    component: Grid,
    parameters: {
        docs: { description: { component: readme } },
    },
};
export default Story;

const Template = (args) => <Grid {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
