import React from 'react';
import Fieldset from './Fieldset';
import data from './Fieldset.data';
import readme from './Fieldset.md';

const Story = {
    component: Fieldset,
    parameters: {
        docs: { description: { component: readme } },
    },
};
export default Story;

const Template = (args) => <Fieldset {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
