import React from 'react';
import Hero from './Hero';
import data from './Hero.data';

export default { title: 'Components/Hero' };

export const HeroDefault = () => (
    <Hero {...data} />
);
