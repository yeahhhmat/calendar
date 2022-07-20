"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** messages */
const isValidYear_messages_1 = require("./isValidYear.messages");
const isValidYear = (year) => {
    if (isNaN(parseFloat(String(year)))) {
        return isValidYear_messages_1.invalidYearMessages.invalidYearArg;
    }
    if (String(year).length !== 4) {
        return isValidYear_messages_1.invalidYearMessages.invalidYearLength;
    }
    return true;
};
exports.default = isValidYear;
//# sourceMappingURL=isValidYear.js.map