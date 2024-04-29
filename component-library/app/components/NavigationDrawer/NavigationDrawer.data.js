import React from 'react';

import Nav from '../Nav';
import menu from '../Nav/Nav.data';

const children = (
    <>
        <Nav
            {...menu}
            label="Mobile menu"
            orientation="Vertical"
            modifier="MobileMain"
        />
        <Nav
            {...menu}
            label="Mobile service menu"
            orientation="Vertical"
            modifier="MobileService"
        />
    </>
);

const data = {
    children: '-- Navigation drawer --',
};

export default data;

export const withNav = {
    children: children,
};
