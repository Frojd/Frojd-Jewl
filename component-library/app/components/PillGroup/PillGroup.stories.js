import React from 'react';
import PillGroup from './PillGroup';
import data from './PillGroup.data';
import readme from './PillGroup.md';

const Story = {
    component: PillGroup,
    parameters: {
        docs: { description: { component: readme } },
    },
};
export default Story;

const Template = (args) => <PillGroup {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
