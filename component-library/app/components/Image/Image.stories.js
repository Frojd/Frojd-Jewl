import React from 'react';
import Image from './Image';
import data, {portrait} from './Image.data';
import readme from './Image.md';

export default {
    title: 'Components/Image',
    component: Image,
    parameters: {
        docs: {description: {component: readme}}
    },
};

const Template = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {...data};

export const Portrait = Template.bind({});
Portrait.args = {...portrait};
