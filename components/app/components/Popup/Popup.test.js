import React from 'react';
import {
    shallow,
    // mount
} from 'enzyme';

import Popup from './';
// import data from './Popup.data';

describe('<Popup />', () => {
    it('Renders an empty Popup', () => {
        const component = shallow(<Popup />);
        expect(component).toBeTruthy();
    });

    // it('Renders Popup with data', () => {
    //     const component = mount(<Popup {...data} />);
    //     expect(component).toMatchSnapshot();
    // });
});
