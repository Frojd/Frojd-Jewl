import React from 'react';
import Button from './Button';
import data from './Button.data';
import readme from './Button.md';

const Story = {
    component: Button,
    parameters: {
        docs: { description: { component: readme } },
    },
    args: {
        url: null,
        modifier: 'Primary',
        size: 'Large',
        icon: '',
    },
    argTypes: {
        url: {
            description:
                'If url is empty, a-tag will be used, otherwise button',
            control: { type: 'text' },
        },
        modifier: {
            options: [
                'Primary',
                'Secondary',
                'Tertiary',
                'TextLink',
                'TextLinkWhite',
            ],
            control: { type: 'select' },
        },
        size: {
            options: ['Large'],
            control: { type: 'select' },
        },
        icon: {
            options: ['Arrow', 'External', 'Download'],
            control: { type: 'select' },
        },
    },
};
export default Story;

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { ...data, modifier: 'Primary' };

export const Secondary = Template.bind({});
Secondary.args = { ...data, modifier: 'Secondary' };

export const Tertiary = Template.bind({});
Tertiary.args = { ...data, modifier: 'Tertiary' };

export const TextLink = Template.bind({});
TextLink.args = { ...data, modifier: 'TextLink' };

export const TextLinkWhite = Template.bind({});
TextLinkWhite.args = { ...data, modifier: 'TextLinkWhite' };
TextLinkWhite.decorators = [
    (Story) => (
        <div style={{ backgroundColor: 'rgba(0,0,0,.8)' }}>
            <Story />
        </div>
    ),
];
