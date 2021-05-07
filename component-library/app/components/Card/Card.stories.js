import React from 'react';
import Card from './Card';
import data from './Card.data';

export default { title: 'Components/Card' };

export const CardDefault = () => (
    <Card {...data} />
);
