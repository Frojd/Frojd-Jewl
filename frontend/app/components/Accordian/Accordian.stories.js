import * as React from 'react';

import Accordian from './Accordian';
import markdown from './Accordian.md';
import data from './Accordian.data';

export default { title: 'Components|Accordian'}

export const withData = () => <Accordian {...data} />;
withData.story = {
    parameters: {
        notes: { markdown: markdown },
    },
};
