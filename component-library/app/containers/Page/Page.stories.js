import React from 'react';
import Page from './Page';
import data from './Page.data';
// import readme from './Page.md';

export default {
    component: Page,
    parameters: {
        // docs: {description: {component: readme}},
    },
};

const Template = (args) => <Page {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
