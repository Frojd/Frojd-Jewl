import React from 'react';
import Layout from './Base';
import data from './Base.data';
import readme from './Base.md';

const Story = {
    component: Layout,
    parameters: {
        docs: { description: { component: readme } },
    },
};
export default Story;

const Container = () => <div>--Layout Container--</div>;

const Template = (args) => <Container {...args} />;

export const Default = Layout(Template).bind({});
Default.args = { ...data };
