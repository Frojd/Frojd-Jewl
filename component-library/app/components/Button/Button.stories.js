import React from 'react';
import Button from './Button';
import data from './Button.data';
import readme from './Button.md';

export default {
    component: Button,
    parameters: {
        docs: {description: {component: readme}},
        modifier: {
            options: ['Primary', 'Secondary', 'Tertiary', 'TextLink', 'TextLinkWhite'],
            control: {type: 'select'},
        },
        // size: {
        //     options: ['Large'],
        //     control: {type: 'select'},
        // },
        icon: {
            options: ['', 'Arrow', 'External', 'Download'],
            control: {type: 'select'},
        },
    },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {...data};
