import React from 'react';
import Popup from './Popup';
import data from './Popup.data';
import readme from './Popup.md';

export default {
    component: Popup,
    parameters: {
        docs: {description: {component: readme}}
    },
};

const Template = (args) => <Popup {...data} {...args} />;

export const Default = Template.bind({});
