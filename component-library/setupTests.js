import '@testing-library/jest-dom';

require('jest-fetch-mock').enableMocks();

window.matchMedia = window.matchMedia || function() {
  return {
    matches : false,
    addListener : function() {},
    removeListener: function() {}
  };
};

jest.mock('app/inline-svg/*.svg', () => 'svg');

global.isJest = true;
