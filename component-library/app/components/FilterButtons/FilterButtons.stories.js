import React from 'react';
import FilterButtons from './FilterButtons';
import data from './FilterButtons.data';
import readme from './FilterButtons.md';

export default {
    component: FilterButtons,
    parameters: {
        docs: {description: {component: readme}}
    },
};

const Template = (args) => <FilterButtons {...args} />;

export const Default = Template.bind({});
Default.args = {...data};
