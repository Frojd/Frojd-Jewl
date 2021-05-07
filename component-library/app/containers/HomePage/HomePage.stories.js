import React from 'react';
import HomePage from './HomePage';
import data from './HomePage.data';

export default { title: 'Containers/HomePage' };

export const HomePageDefault = () => (
    <HomePage {...data} />
);
