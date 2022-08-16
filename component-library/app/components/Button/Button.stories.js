import React from 'react';
import Button from './Button';
import data from './Button.data';
import readme from './Button.md';

export default {
    component: Button,
    parameters: {
        docs: {description: {component: readme}},
    },
    args: {
        modifier: 'Primary',
        size: 'Large',
        icon: '',
    },
    argTypes: {
        modifier: {
            options: ['Primary', 'Secondary', 'Tertiary', 'TextLink', 'TextLinkWhite'],
            control: {type: 'select'},
        },
        size: {
            options: ['Large'],
            control: {type: 'select'},
        },
        icon: {
            options: ['Arrow', 'External', 'Download'],
            control: {type: 'select'},
        },
    },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {...data, modifier: 'Primary'};

export const Secondary = Template.bind({});
Secondary.args = {...data, modifier: 'Secondary'};

export const Tertiary = Template.bind({});
Tertiary.args = {...data, modifier: 'Tertiary'};

export const TextLink = Template.bind({});
TextLink.args = {...data, modifier: 'TextLink'};

export const TextLinkWhite = Template.bind({});
TextLinkWhite.args = {...data, modifier: 'TextLinkWhite'};
TextLinkWhite.decorators = [
    (Story) => (
        <div style={{ backgroundColor: 'rgba(0,0,0,.8)' }}>
            <Story />
        </div>
    ),
];
