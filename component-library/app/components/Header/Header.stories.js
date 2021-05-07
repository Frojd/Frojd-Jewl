import React from 'react';
import Header from './Header';
import data from './Header.data';

export default { title: 'Components/Header' };

export const HeaderDefault = () => (
    <Header {...data} />
);
