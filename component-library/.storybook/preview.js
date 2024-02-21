import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18n';
import './storybook.scss';

const withProvider = (Story, context) => {
    return (
        <div>
            <I18nextProvider i18n={i18n}>
                <Story
                    {...context}
                />
            </I18nextProvider>
        </div>
    );
};

export default {
    parameters: {
        layout: 'fullscreen',
        html: {
            prettier: {
                tabWidth: 4,
                useTabs: false,
                htmlWhitespaceSensitivity: 'css',
            },
        },
    },
    decorators: [
        withProvider,
    ],
};
