import React from 'react';

import Nav from 'Components/Nav';
import menu from 'Components/Nav/Nav.data';

const children = (
    <Nav
        {...menu}
        label="Mobile menu"
        orientation="Vertical"
        modifier="Mobile"
    />
);

export default {
};

export const withNav = {
    children: children,
};
