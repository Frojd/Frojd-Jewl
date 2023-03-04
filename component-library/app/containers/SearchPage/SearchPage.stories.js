import React from 'react';
import SearchPage from './SearchPage';
import data from './SearchPage.data';
import readme from './SearchPage.md';

export default {
    component: SearchPage,
    parameters: {
        docs: {description: {component: readme}}
    },
};

const Template = (args) => <SearchPage {...args} />;

export const Default = Template.bind({});
Default.args = {...data};
