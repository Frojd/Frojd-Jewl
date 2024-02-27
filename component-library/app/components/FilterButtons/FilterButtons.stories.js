import React from 'react';
import FilterButtons from './FilterButtons';
import data from './FilterButtons.data';
import readme from './FilterButtons.md';

const Story = {
    component: FilterButtons,
    parameters: {
        docs: { description: { component: readme } },
    },
};
export default Story;

const Template = (args) => <FilterButtons {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
