import React from 'react';
import {Description} from '@storybook/addon-docs/blocks';
import __Component from './__Component';
import data from './__Component.data';
import readme from './__Component.md';

const Doc = () => <Description markdown={readme} />;

export default {
    title: '__StoryTitle',
    parameters: {
        docs: {
            page: Doc
        }
    },
};

export const __ComponentDefault = () => (
    <__Component {...data} />
);
