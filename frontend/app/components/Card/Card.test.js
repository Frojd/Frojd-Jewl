import React from 'react';
import {
    shallow,
    // mount
} from 'enzyme';

import Card from './';
// import data from './Card.data';

describe('<Card />', () => {
    it('Renders an empty Card', () => {
        const component = shallow(<Card />);
        expect(component).toBeTruthy();
    });

    // it('Renders Card with data', () => {
    //     const component = mount(<Card {...data} />);
    //     expect(component).toMatchSnapshot();
    // });
});
