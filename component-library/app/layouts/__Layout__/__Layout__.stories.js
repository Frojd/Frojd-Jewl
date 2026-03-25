import React from 'react';
import Layout from './__Layout__';
import data from './__Layout__.data';
import readme from './__Layout__.md';

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
