import React from 'react';
import Page from './Page';
import data from './Page.data';
// import readme from './Page.md';

const Story = {
    component: Page,
    parameters: {
        // docs: {description: {component: readme}},
    },
};
export default Story;

const Template = (args) => <Page {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
