"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calendar = exports.formatResponse = exports.getDaysInMonth = exports.formatDate = exports.months = void 0;
/** Dependencies */
const dayjs_1 = __importDefault(require("dayjs"));
const localeData_1 = __importDefault(require("dayjs/plugin/localeData"));
/** Configurations */
dayjs_1.default.extend(localeData_1.default);
(0, dayjs_1.default)().format();
/** Constants */
exports.months = dayjs_1.default.months().reverse(); // https://day.js.org/docs/en/i18n/listing-months-weekdays
/** Methods */
const formatDate = ({ year, months, current, day = '01' }, locale = '') => {
    const month = 12 - months.indexOf(current);
    const formattedDay = String(day).padStart(2, '0');
    const formattedDate = new Date(`${year}-${month}-${formattedDay}`);
    return new Intl.DateTimeFormat(locale && locale.length > 0 ? locale : 'en-US').format(formattedDate);
};
exports.formatDate = formatDate;
const getDaysInMonth = ({ year, months, current }) => ((0, dayjs_1.default)((0, exports.formatDate)({ year, months, current })).daysInMonth());
exports.getDaysInMonth = getDaysInMonth;
const formatResponse = ({ collector, current, months, year }, { locale }) => {
    /** Constants */
    const daysInMonth = (0, exports.getDaysInMonth)({ year, months, current });
    const daysOfMonthAsArray = [...new Array(daysInMonth).keys()];
    const formatInnerReducerCallback = (innerCollector, innerCurrent) => (Object.assign({ [String(innerCurrent + 1)]: (0, exports.formatDate)({ year, months, current, day: String(innerCurrent + 1) }, locale) }, innerCollector));
    return Object.assign({ [current.toLowerCase()]: {
            count: daysInMonth,
            collection: daysOfMonthAsArray.reduce(formatInnerReducerCallback, {})
        } }, collector);
};
exports.formatResponse = formatResponse;
const calendar = (year, options) => {
    if (String(year).length !== 4 || isNaN(parseFloat(String(year)))) {
        return ({
            'error': {
                'body': "invalid argument passed to `calendar('YYYY')`"
            }
        });
    }
    const locale = (options && options.locale || null);
    return exports.months.reduce((collector, current) => (0, exports.formatResponse)({ year: String(year), months: exports.months, current, collector }, { locale }), {});
};
exports.calendar = calendar;
//# sourceMappingURL=index.js.map