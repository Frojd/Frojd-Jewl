import React from 'react';
import Grid from './Grid';
import data, { autoItemSizes } from './Grid.data';
import readme from './Grid.md';

const Story = {
    component: Grid,
    parameters: {
        docs: { description: { component: readme } },
    },
    args: {
        columns: 'auto',
    },
    argTypes: {
        columns: {
            options: ['auto', 4, 3, 2, 1],
            control: { type: 'select' },
        },
    },
};
export default Story;

const Template = (args) => <Grid {...args} />;

export const Default = Template.bind({});
Default.args = { ...autoItemSizes };
