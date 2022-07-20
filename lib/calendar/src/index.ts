/** dependencies */
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import {reduce} from 'lodash';

/** configurations */
dayjs.extend(localeData);
dayjs().format();

import {
  getDaysInMonthInterface,
  commonKeyValueInterface,
  formatResponseInterface,
  formatErrorResponseInterface,
  formatResponseProps
} from './index.interfaces';

import {isValidYear, buildDateString} from './calendar/utilities';
export {isValidYear, buildDateString};

/** Constants */
export const months: string[] = dayjs.months().reverse(); // https://day.js.org/docs/en/i18n/listing-months-weekdays

export const getDaysInMonth = (data: getDaysInMonthInterface): number => {
  const {year, months, current} = data;

  return (
    dayjs(buildDateString({year, months, current})).daysInMonth()
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
    };

    return (
      formatCollectByMonthResponse({...data, collector, current}, options)
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
    [String(innerCurrent + 1)]: buildDateString({year, months, current, day: String(innerCurrent + 1)}, options),
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
