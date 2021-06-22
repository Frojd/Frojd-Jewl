import React from 'react';
import {Description} from '@storybook/addon-docs/blocks';
import __Container from './__Container';
import data from './__Container.data';
import readme from './__Container.md';

const Doc = () => <Description markdown={readme} />;

export default {
    title: '__StoryTitle',
    parameters: {
        docs: {
            page: Doc
        }
    },
};

export const __ContainerDefault = () => (
    <__Container {...data} />
);
