import React from 'react';
import {Description} from '@storybook/addon-docs/blocks';
import Accordion from './Accordion';
import data from './Accordion.data';
import readme from './Accordion.md';

const Doc = () => <Description markdown={readme} />;

export default {
    title: 'Components/Accordion',
    parameters: {
        docs: {
            page: Doc
        }
    },
};

export const AccordionDefault = () => (
    <Accordion {...data} />
);
