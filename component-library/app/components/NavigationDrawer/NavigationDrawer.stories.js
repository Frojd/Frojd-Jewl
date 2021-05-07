import * as React from 'react';
import NavigationDrawer from './NavigationDrawer';
import data from './NavigationDrawer.data';

export default { title: 'Components/NavigationDrawer' };

export const NavigationDrawerDefault = () => (
    <NavigationDrawer {...data} />
);
