/** types */
import {isValidYearType} from './isValidYear.types';

/** messages */
import {invalidYearMessages} from './isValidYear.messages';

const isValidYear = (year: string | number): isValidYearType => {
  if (isNaN(parseFloat(String(year)))) {
    return invalidYearMessages.invalidYearArg;
  }

  if (String(year).length !== 4) {
    return invalidYearMessages.invalidYearLength;
  }

  return true;
};

export default isValidYear;
