import React from 'react';
import NotFoundPage from './NotFoundPage';
import data from './NotFoundPage.data';

export default { title: 'Containers/NotFoundPage' };

export const NotFoundPageDefault = () => (
    <NotFoundPage {...data} />
);
