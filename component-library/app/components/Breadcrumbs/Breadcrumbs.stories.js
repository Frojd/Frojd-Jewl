import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import data from './Breadcrumbs.data';
import readme from './Breadcrumbs.md';

export default {
    component: Breadcrumbs,
    parameters: {
        docs: {description: {component: readme}}
    },
};

const Template = (args) => <Breadcrumbs {...args} />;

export const Default = Template.bind({});
Default.args = {...data};
