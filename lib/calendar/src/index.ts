/** Dependencies */
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';

/** Configurations */
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

/** Constants */
export const months: string[] = dayjs.months().reverse(); // https://day.js.org/docs/en/i18n/listing-months-weekdays

/** Methods */
export const formatDate = ({year, months, current, day = '01'}: formatDateInterface, locale = ''): string => {
  const month = 12 - months.indexOf(current);
  const formattedDay = String(day).padStart(2, '0');
  const formattedDate = new Date(`${year}-${month}-${formattedDay}`);
  return new Intl.DateTimeFormat(locale && locale.length > 0 ? locale : 'en-US').format(formattedDate);
};

export const getDaysInMonth = ({year, months, current}: getDaysInMonthInterface): number => (
  dayjs(formatDate({year, months, current})).daysInMonth()
);

export const formatResponse = ({collector, current, months, year}: formatResponseProps, {locale}): formatResponseInterface => {
  /** Constants */
  const daysInMonth: number = getDaysInMonth({year, months, current});
  const daysOfMonthAsArray: number[] = [...new Array(daysInMonth).keys()];

  const formatInnerReducerCallback = (innerCollector: commonKeyValueInterface, innerCurrent: number): commonKeyValueInterface => ({
    [String(innerCurrent + 1)]: formatDate({year, months, current, day: String(innerCurrent + 1)}, locale),
    ...innerCollector,
  });

  return {
    [current.toLowerCase()]: {
      count: daysInMonth,
      collection: daysOfMonthAsArray.reduce(formatInnerReducerCallback, {})
    },
    ...collector,
  };
};

export const calendar = (year: number | string, options: {locale? : string | null}): formatResponseInterface | formatErrorResponseInterface => {
  if(String(year).length !== 4 || isNaN(parseFloat(String(year)))) {
    return ({
      'error': {
        'body': "invalid argument passed to `calendar('YYYY')`"
      }
    });
  }
  const locale = (options && options.locale || null);

  return months.reduce(
    (collector: formatResponseInterface, current: string) =>
      formatResponse({year: String(year), months, current, collector}, {locale}),
    {}
  );
};
