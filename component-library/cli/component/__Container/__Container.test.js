import React from 'react';
import { mount } from 'enzyme';
import 'i18n';
import renderer from 'react-test-renderer';

import TestComponent from './';
import data from './__Container.data';
const testName = '__Container';

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
