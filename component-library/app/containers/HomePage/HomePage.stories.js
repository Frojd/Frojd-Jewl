import React from 'react';
import HomePage from './HomePage';
import data from './HomePage.data';

export default {
    component: HomePage,
};

export const HomePageDefault = () => (
    <HomePage {...data} />
);
