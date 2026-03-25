import React from 'react';
import SearchForm from './SearchForm';
import data from './SearchForm.data';
import readme from './SearchForm.md';

const Story = {
    component: SearchForm,
    parameters: {
        docs: { description: { component: readme } },
    },
};
export default Story;

const Template = (args) => <SearchForm {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
