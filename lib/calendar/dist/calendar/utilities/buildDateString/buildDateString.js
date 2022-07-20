"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** dependencies */
const lodash_1 = require("lodash");
const buildDateString = ({ year, months, current, day = '01' }, locale = '') => {
    const month = 12 - months.indexOf(current);
    const formattedDay = String(day).padStart(2, '0');
    const formattedDate = new Date(`${year}-${month}-${formattedDay}`);
    if (!(0, lodash_1.isEmpty)(locale)) {
        return new Intl.DateTimeFormat(locale).format(formattedDate);
    }
    return new Intl.DateTimeFormat('en-US').format(formattedDate);
};
exports.default = buildDateString;
//# sourceMappingURL=buildDateString.js.map