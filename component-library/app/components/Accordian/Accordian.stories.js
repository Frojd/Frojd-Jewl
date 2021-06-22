import React from 'react';
import {Description} from '@storybook/addon-docs/blocks';
import Accordian from './Accordian';
import data from './Accordian.data';
import readme from './Accordian.md';

const Doc = () => <Description markdown={readme} />;

export default {
    title: 'Components/Accordian',
    parameters: {
        docs: {
            page: Doc
        }
    },
};

export const AccordianDefault = () => (
    <Accordian {...data} />
);
