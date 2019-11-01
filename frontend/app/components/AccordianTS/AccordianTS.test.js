import React from 'react';
import {
    shallow,
    // mount
} from 'enzyme';

import AccordianTS from '.';
// import data from './AccordianTS.data';

describe('<AccordianTS />', () => {
    it('Renders an empty AccordianTS', () => {
        const component = shallow(<AccordianTS />);
        expect(component).toBeTruthy();
    });

    // it('Renders AccordianTS with data', () => {
    //     const component = mount(<AccordianTS {...data} />);
    //     expect(component).toMatchSnapshot();
    // });
});
