import React from 'react';
import {
    shallow,
    // mount
} from 'enzyme';

import Accordion from './';
// import data from './Accordion.data';

describe('<Accordion />', () => {
    it('Renders an empty Accordion', () => {
        const component = shallow(<Accordion />);
        expect(component).toBeTruthy();
    });

    // it('Renders Accordion with data', () => {
    //     const component = mount(<Accordion {...data} />);
    //     expect(component).toMatchSnapshot();
    // });
});
