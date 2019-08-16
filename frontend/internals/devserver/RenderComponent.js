// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import '../../app/styles/index.scss';
import { Component, props } from './Component';

ReactDOM.render(<Component {...props} />, document.getElementById('root'));
