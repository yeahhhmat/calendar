/** dependencies */
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import {reduce, isEmpty} from 'lodash';

/** configurations */
dayjs.extend(localeData);
dayjs().format();

import {
  getDaysInMonthInterface,
  commonKeyValueInterface,
  formatResponseInterface,
  formatErrorResponseInterface,
  formatDateInterface,
  formatResponseProps
} from './index.interfaces';

import {isValidYear} from './calendar/isValidYear';
export {isValidYear};
/** Constants */
export const months: string[] = dayjs.months().reverse(); // https://day.js.org/docs/en/i18n/listing-months-weekdays

/** Methods */
export const formatDate = ({year, months, current, day = '01'}: formatDateInterface, locale = ''): string => {
  const month = 12 - months.indexOf(current);
  const formattedDay = String(day).padStart(2, '0');
  const formattedDate = new Date(`${year}-${month}-${formattedDay}`);

  if(!isEmpty(locale)) {
    return new Intl.DateTimeFormat(locale).format(formattedDate);
  }

  return new Intl.DateTimeFormat('en-US').format(formattedDate);
};

export const getDaysInMonth = (data: getDaysInMonthInterface): number => {
  const {year, months, current} = data;

  return (
    dayjs(formatDate({year, months, current})).daysInMonth()
  );
};

type calendarInterface = formatResponseInterface | formatErrorResponseInterface;

export const calendar = (
  year: number | string,
  options: {
    locale? : string | null,
    monthFormat?: 'M' | 'MM' | 'MMM' | 'MMMM' | null
  }
): calendarInterface => {
  /** error boundary */
  const validYear = isValidYear(year);
  if (typeof validYear !== 'boolean') {
    return validYear;
  }

  const collectByMonth = (
    collector: formatResponseInterface,
    current: string
  ) => {
    const data = {
      year: String(year),
      months: dayjs.months(),
      current,
      collector
    };
    return (
      formatCollectByMonthResponse(data, options)
    );
  };
  return reduce(months, collectByMonth, {});
};

export const formatCollectByMonthResponse = (data: formatResponseProps, options): formatResponseInterface => {
  const {collector, current, months, year} = data;

  /** constants */
  const daysInMonth: number = getDaysInMonth({year, months, current});
  const daysOfMonthAsArray: number[] = [...new Array(daysInMonth).keys()];

  const formatDaysInMonth = (innerCollector: commonKeyValueInterface, innerCurrent: number): commonKeyValueInterface => ({
    [String(innerCurrent + 1)]: formatDate({year, months, current, day: String(innerCurrent + 1)}, options),
    ...innerCollector,
  });

  return {
    [current.toLowerCase()]: {
      count: daysInMonth,
      collection: reduce(daysOfMonthAsArray, formatDaysInMonth, {})
    },
    ...collector,
  };
};
