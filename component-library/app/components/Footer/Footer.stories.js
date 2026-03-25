import React from 'react';
import Footer from './Footer';
import data from './Footer.data';
import readme from './Footer.md';

const Story = {
    component: Footer,
    parameters: {
        docs: { description: { component: readme } },
    },
};
export default Story;

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
