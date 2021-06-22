import React from 'react';
import {Description} from '@storybook/addon-docs/blocks';
import Popup from './Popup';
import data from './Popup.data';
import readme from './Popup.md';

const Doc = () => <Description markdown={readme} />;

export default {
    title: 'Components/Popup',
    parameters: {
        docs: {
            page: Doc
        }
    },
};

export const PopupDefault = () => (
    <Popup {...data} />
);
