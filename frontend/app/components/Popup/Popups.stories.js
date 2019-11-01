/* global module */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Popup from './Popup';

import data from './Popup.data.js';

storiesOf('Components|Popup', module)
    .add('without data', () => <Popup />)
    .add('with data', () => <Popup {...data} />);
