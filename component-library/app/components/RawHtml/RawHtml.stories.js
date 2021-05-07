import * as React from 'react';
import RawHtml from './RawHtml';
import data from './RawHtml.data';

export default { title: 'Components/RawHtml' };

export const RawHtmlDefault = () => (
    <RawHtml {...data} />
);
