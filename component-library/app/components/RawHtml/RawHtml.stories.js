import * as React from 'react';

import RawHtml from './RawHtml';
import data from './RawHtml.data';

export default { title: "Components|RawHtml"}

export const withoutData = () => <RawHtml />;

export const withData = () => <RawHtml {...data} />;