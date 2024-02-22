/* eslint-disable no-unused-vars */
import React from 'react';
import 'i18n';
import { render, /* screen */ } from '@testing-library/react';
import renderer from 'react-test-renderer';
/* eslint-enable no-unused-vars */

import TestComponent from './';
import data from './FilterButtons.data';
const testName = 'FilterButtons';

describe(`<${testName} />`, () => {
    it(`Renders an empty ${testName}`, () => {
        render(<TestComponent />);
    });

    it(`Renders ${testName} with data`, () => {
        render(<TestComponent {...data} />);
    });

    // it(`Renders ${testName} snapshot with data`, () => {
    //     const componentJson = renderer
    //         .create(<TestComponent {...data} />)
    //         .toJSON();
    //     expect(componentJson).toMatchSnapshot();
    // });
});
