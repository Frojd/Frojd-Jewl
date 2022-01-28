/* eslint-disable no-unused-vars */
import React from 'react';
import { mount } from 'enzyme';
import 'i18n';
import renderer from 'react-test-renderer';
/* eslint-enable no-unused-vars */

import TestComponent from './';
import data from './Card.data';
const testName = 'Card';

describe(`<${testName} />`, () => {
    it(`Renders an empty ${testName}`, () => {
        const wrapper = mount(<TestComponent />);
        expect(wrapper.find(TestComponent)).toHaveLength(1);
    });

    it(`Renders ${testName} with data`, () => {
        const wrapper = mount(<TestComponent {...data} />);
        expect(wrapper.find(TestComponent)).toHaveLength(1);
    });

    // it(`Renders an empty ${testName}`, () => {
    //     const componentJson = renderer
    //         .create(<TestComponent />)
    //         .toJSON();
    //     expect(componentJson).toBeTruthy();
    // });

    // it(`Renders ${testName} snapshot with data`, () => {
    //     const componentJson = renderer
    //         .create(<TestComponent {...data} />)
    //         .toJSON();
    //     expect(componentJson).toMatchSnapshot();
    // });
});
