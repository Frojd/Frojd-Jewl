import React from 'react';
import Popup from './Popup';
import data from './Popup.data';
import readme from './Popup.md';

const Story = {
    component: Popup,
    parameters: {
        docs: { description: { component: readme } },
    },
};
export default Story;

const Template = (args) => <Popup {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
