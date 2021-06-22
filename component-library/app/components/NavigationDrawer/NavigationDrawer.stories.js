import React from 'react';
import {Description} from '@storybook/addon-docs/blocks';
import NavigationDrawer from './NavigationDrawer';
import data from './NavigationDrawer.data';
import readme from './NavigationDrawer.md';

const Doc = () => <Description markdown={readme} />;

export default {
    title: 'Components/NavigationDrawer',
    parameters: {
        docs: {
            page: Doc
        }
    },
};

export const NavigationDrawerDefault = () => (
    <NavigationDrawer {...data} />
);
