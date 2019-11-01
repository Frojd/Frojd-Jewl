import * as React from 'react';
import Popup from './Popup';

import data from './Popup.data.js';

export default { title: 'Components|Popup' };

export const withoutData = () => <Popup />;

export const withData = () => <Popup {...data} />;
