import React, { useState } from 'react';
import Animate from './Animate';
import data, { component } from './Animate.data';
import readme from './Animate.md';

const Story = {
    component: Animate,
    parameters: {
        docs: { description: { component: readme } },
    },
};
export default Story;

const Template = (args) => {
    const [animate, setAnimate] = useState(false);

    const Component = component;
    return (
        <div id="template">
            <button type="button" onClick={() => setAnimate(!animate)}>
                Toggle
            </button>
            <Animate {...args} isVisible={animate}>
                <div>
                    <Component />
                </div>
            </Animate>
        </div>
    );
};

export const AnimateInOut = Template.bind({});
AnimateInOut.args = { ...data, type: 'fade' };

export const AnimateUpDown = Template.bind({});
AnimateUpDown.args = { ...data, type: 'expand' };

export const AnimateLeftRight = Template.bind({});
AnimateLeftRight.args = { ...data, type: 'slide' };
