import React from 'react';
import ArticlePage from './ArticlePage';
import data from './ArticlePage.data';
import readme from './ArticlePage.md';

export default {
    component: ArticlePage,
    parameters: {
        // docs: {description: {component: readme}},
    },
};

const Template = (args) => <ArticlePage {...args} />;

export const Default = Template.bind({});
Default.args = {...data};
