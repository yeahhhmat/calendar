/** dependencies */
import {isEmpty} from 'lodash';

/** types */
import {buildDateStringTypes} from './buildDateString.types';

const buildDateString = ({year, months, current, day = '01'}: buildDateStringTypes, locale = ''): string => {
  const month = 12 - months.indexOf(current);
  const formattedDay = String(day).padStart(2, '0');
  const formattedDate = new Date(`${year}-${month}-${formattedDay}`);

  if(!isEmpty(locale)) {
    return new Intl.DateTimeFormat(locale).format(formattedDate);
  }

  return new Intl.DateTimeFormat('en-US').format(formattedDate);
};

export default buildDateString;
