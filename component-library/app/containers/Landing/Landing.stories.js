import React from 'react';
import Landing from './Landing';
import data from './Landing.data';

export default {
    component: Landing,
};

export const LandingDefault = () => <Landing {...data} />;
