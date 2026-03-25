import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import data from './Breadcrumbs.data';
import readme from './Breadcrumbs.md';

const Story = {
    component: Breadcrumbs,
    parameters: {
        docs: { description: { component: readme } },
    },
};
export default Story;

const Template = (args) => <Breadcrumbs {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
