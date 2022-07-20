"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCollectByMonthResponse = exports.calendar = exports.getDaysInMonth = exports.months = exports.buildDateString = exports.isValidYear = void 0;
/** dependencies */
const dayjs_1 = __importDefault(require("dayjs"));
const localeData_1 = __importDefault(require("dayjs/plugin/localeData"));
const lodash_1 = require("lodash");
/** configurations */
dayjs_1.default.extend(localeData_1.default);
(0, dayjs_1.default)().format();
const utilities_1 = require("./calendar/utilities");
Object.defineProperty(exports, "isValidYear", { enumerable: true, get: function () { return utilities_1.isValidYear; } });
Object.defineProperty(exports, "buildDateString", { enumerable: true, get: function () { return utilities_1.buildDateString; } });
/** Constants */
exports.months = dayjs_1.default.months().reverse(); // https://day.js.org/docs/en/i18n/listing-months-weekdays
const getDaysInMonth = (data) => {
    const { year, months, current } = data;
    return ((0, dayjs_1.default)((0, utilities_1.buildDateString)({ year, months, current })).daysInMonth());
};
exports.getDaysInMonth = getDaysInMonth;
const calendar = (year, options) => {
    /** error boundary */
    const validYear = (0, utilities_1.isValidYear)(year);
    if (typeof validYear !== 'boolean') {
        return validYear;
    }
    const collectByMonth = (collector, current) => {
        const data = {
            year: String(year),
            months: dayjs_1.default.months(),
        };
        return ((0, exports.formatCollectByMonthResponse)(Object.assign(Object.assign({}, data), { collector, current }), options));
    };
    return (0, lodash_1.reduce)(exports.months, collectByMonth, {});
};
exports.calendar = calendar;
const formatCollectByMonthResponse = (data, options) => {
    const { collector, current, months, year } = data;
    /** constants */
    const daysInMonth = (0, exports.getDaysInMonth)({ year, months, current });
    const daysOfMonthAsArray = [...new Array(daysInMonth).keys()];
    const formatDaysInMonth = (innerCollector, innerCurrent) => (Object.assign({ [String(innerCurrent + 1)]: (0, utilities_1.buildDateString)({ year, months, current, day: String(innerCurrent + 1) }, options) }, innerCollector));
    return Object.assign({ [current.toLowerCase()]: {
            count: daysInMonth,
            collection: (0, lodash_1.reduce)(daysOfMonthAsArray, formatDaysInMonth, {})
        } }, collector);
};
exports.formatCollectByMonthResponse = formatCollectByMonthResponse;
//# sourceMappingURL=index.js.map