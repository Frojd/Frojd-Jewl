/* global module */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Accordian from './Accordian';

import data from './Accordian.data.js';

storiesOf('Components|Accordian', module)
    .add('without data', () => <Accordian />)
    .add('with data', () => <Accordian {...data} />);
