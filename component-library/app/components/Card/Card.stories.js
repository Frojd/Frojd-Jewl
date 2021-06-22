import React from 'react';
import {Description} from '@storybook/addon-docs/blocks';
import Card from './Card';
import data from './Card.data';
import readme from './Card.md';

const Doc = () => <Description markdown={readme} />;

export default {
    title: 'Components/Card',
    parameters: {
        docs: {
            page: Doc
        }
    },
};

export const CardDefault = () => (
    <Card {...data} />
);
