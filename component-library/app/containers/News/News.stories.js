import React from 'react';
import News from './News';
import data from './News.data';
// import readme from './News.md';

const Story = {
    component: News,
    parameters: {
        // docs: {description: {component: readme}},
    },
};
export default Story;

const Template = (args) => <News {...args} />;

export const Default = Template.bind({});
Default.args = { ...data };
