import React from 'react';
import Button from './Button';
import data from './Button.data';
import readme from './Button.md';

export default {
    component: Button,
    parameters: {
        docs: {description: {component: readme}},
    },
    argTypes: {
        modifier: {
            defaultValue: 'Primary',
            options: ['Primary', 'Secondary', 'Tertiary', 'TextLink', 'TextLinkWhite'],
            control: {type: 'select'},
        },
        size: {
            defaultValue: 'Large',
            options: ['Large'],
            control: {type: 'select'},
        },
        icon: {
            defaultValue: '',
            options: ['', 'Arrow', 'External', 'Download'],
            control: {type: 'select'},
        },
    },
};

const Template = (args) => {
    console.log(args);
    const style = {
        padding: '20px',
        backgroundColor: args.modifier === 'TextLinkWhite' ? 'rgba(0,0,0,.8)' : '',
    };
    return (
        <div style={style}>
            <Button {...args} />
        </div>
    );
};

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
