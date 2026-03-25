import React from 'react';
import Landing from './Landing';
import data from './Landing.data';

const Story = {
    component: Landing,
};
export default Story;

export const LandingDefault = () => <Landing {...data} />;
