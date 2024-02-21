import React from 'react';

import Nav from 'Components/Nav';
import menu from 'Components/Nav/Nav.data';

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

export default {
};

export const withNav = {
    children: children,
};
