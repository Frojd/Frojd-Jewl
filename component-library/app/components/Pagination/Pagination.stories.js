import React from 'react';
import Pagination from './Pagination';
import data from './Pagination.data';
import readme from './Pagination.md';

export default {
    component: Pagination,
    parameters: {
        docs: { description: { component: readme } },
    },
    args: {
        current: 1,
        total: 1,
        nrOfMiddle: 3,
        nrOfBeginEnd: 1,
    },
    argTypes: {
        current: {
            control: { type: 'number' },
        },
        total: {
            control: { type: 'number' },
        },
        nrOfMiddle: {
            control: { type: 'number' },
        },
        nrOfBeginEnd: {
            control: { type: 'number' },
        },
    },
};

const Template = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
