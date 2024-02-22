import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import i18n from 'i18n';
import './storybook.scss';

const withProvider = (Story, context) => {
    return (
        <div>
            <I18nextProvider i18n={i18n}>
                <Story {...context} />
            </I18nextProvider>
        </div>
    );
};

export default {
    parameters: {
        layout: 'fullscreen',
        viewport: {
            viewports: {
                ...MINIMAL_VIEWPORTS,
                S: {
                    name: 'Breakpoint S',
                    styles: {
                        width: '375px',
                        height: '600px',
                    },
                },
                SL: {
                    name: 'Breakpoint SL',
                    styles: {
                        width: '500px',
                        height: '600px',
                    },
                },
                M: {
                    name: 'Breakpoint M',
                    styles: {
                        width: '768px',
                        height: '600px',
                    },
                },
                ML: {
                    name: 'Breakpoint ML',
                    styles: {
                        width: '1024px',
                        height: '600px',
                    },
                },
                L: {
                    name: 'Breakpoint L',
                    styles: {
                        width: '1280px',
                        height: '600px',
                    },
                },
                XL: {
                    name: 'Breakpoint XL',
                    styles: {
                        width: '1440px',
                        height: '600px',
                    },
                },
                XXL: {
                    name: 'Breakpoint XXL',
                    styles: {
                        width: '1680px',
                        height: '600px',
                    },
                },
            },
        },
        html: {
            prettier: {
                tabWidth: 4,
                useTabs: false,
            },
        },
    },
    decorators: [withProvider],
};
