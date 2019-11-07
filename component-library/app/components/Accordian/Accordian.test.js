import React from 'react';
import {
    shallow,
    // mount
} from 'enzyme';

import Accordian from './';
// import data from './Accordian.data';

describe('<Accordian />', () => {
    it('Renders an empty Accordian', () => {
        const component = shallow(<Accordian />);
        expect(component).toBeTruthy();
    });

    // it('Renders Accordian with data', () => {
    //     const component = mount(<Accordian {...data} />);
    //     expect(component).toMatchSnapshot();
    // });
});
