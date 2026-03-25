import React from 'react';
import Richtext from './Richtext';
import data from './Richtext.data';
import readme from './Richtext.md';

const Story = {
    component: Richtext,
    parameters: {
        docs: { description: { component: readme } },
    },
};
export default Story;

const Template = (args) => <Richtext {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
