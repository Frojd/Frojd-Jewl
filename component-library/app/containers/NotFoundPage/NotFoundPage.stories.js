import React from 'react';
import NotFoundPage from './NotFoundPage';
import data from './NotFoundPage.data';

export default {
    component: NotFoundPage,
};

export const NotFoundPageDefault = () => <NotFoundPage {...data} />;
