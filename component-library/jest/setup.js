import 'regenerator-runtime/runtime';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

require('jest-fetch-mock').enableMocks();

Enzyme.configure({
    adapter: new EnzymeAdapter(),
});

global.isJest = true;
