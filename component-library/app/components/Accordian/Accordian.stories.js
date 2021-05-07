import React from 'react';
import Accordian from './Accordian';
import data from './Accordian.data';

export default { title: 'Components/Accordian' };

export const AccordianDefault = () => (
    <Accordian {...data} />
);
