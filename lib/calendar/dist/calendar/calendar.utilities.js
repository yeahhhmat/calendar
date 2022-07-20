'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.isValidYear = void 0;
const isValidYear = (year) => {
  let error = false;
  if (String(year).length !== 4) {
    error = ({
      'error': {
        'title': 'Invalid year length',
        'body': "invalid argument passed to `calendar('YYYY')`"
      }
    });
  }
  else if (isNaN(parseFloat(String(year)))) {
    error = ({
      'error': {
        'title': 'Invalid year argument',
        'body': "invalid argument passed to `calendar('YYYY')`"
      }
    });
  }
  return error;
};
exports.isValidYear = isValidYear;
//# sourceMappingURL=calendar.utilities.js.map
