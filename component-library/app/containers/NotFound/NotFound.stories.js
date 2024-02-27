import React from 'react';
import NotFound from './NotFound';
import data from './NotFound.data';

const Story = {
    component: NotFound,
};
export default Story;

export const NotFoundDefault = () => <NotFound {...data} />;
