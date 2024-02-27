import React from 'react';
import NotFound from './NotFound';
import data from './NotFound.data';

export default {
    component: NotFound,
};

export const NotFoundDefault = () => <NotFound {...data} />;
