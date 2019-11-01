/* global module */

import * as React from 'react';

import AccordianTS from './AccordianTS';

import data from './AccordianTS.data.js';
export default { title: 'Accordion Typescript' };

export const withText = () => <AccordianTS {...data} open={false} id="x" />;
