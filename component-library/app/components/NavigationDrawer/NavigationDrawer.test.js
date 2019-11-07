import React from 'react';
import {
    shallow,
    // mount
} from 'enzyme';

import NavigationDrawer from './';
// import data from './NavigationDrawer.data';

describe('<NavigationDrawer />', () => {
    it('Renders an empty NavigationDrawer', () => {
        const component = shallow(<NavigationDrawer />);
        expect(component).toBeTruthy();
    });

    // it('Renders NavigationDrawer with data', () => {
    //     const component = mount(<NavigationDrawer {...data} />);
    //     expect(component).toMatchSnapshot();
    // });
});
