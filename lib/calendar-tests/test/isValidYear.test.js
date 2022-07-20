/** dependencies */
const {isValidYear} = require('@whilethiscompiles/calendar');
const {invalidYearMessages} = require('@whilethiscompiles/calendar/dist/calendar/isValidYear');
const chai = require('chai');

/** configurations */
const expect = chai.expect;

const CURRENT_MESSAGES = {
  invalidYearLength: {
    'error': {
      'title': 'Invalid year length',
      'body': "invalid argument passed to `calendar('YYYY')`"
    }
  },
  invalidYearArg: {
    'error': {
      'title': 'Invalid year argument',
      'body': "invalid argument passed to `calendar('YYYY')`"
    }
  }
};

describe('utility - isValidYear', () => {
  it('should return true if a valid year is passed as a string', () => {
    expect(isValidYear('2022')).to.be.true;
  });

  it('should return true if a valid year is passed as a number', () => {
    expect(isValidYear(2022)).to.be.true;
  });

  it('should return an "Invalid year length" message if an invalid year length is passed', () => {
    expect(isValidYear('202')).to.deep.equal(CURRENT_MESSAGES.invalidYearLength);
  });

  it('should return an "Invalid year argument" message if an invalid year argument is passed', () => {
    expect(isValidYear('january')).to.deep.equal(CURRENT_MESSAGES.invalidYearArg);
  });

  it('should match mock messages', () => {
    expect(invalidYearMessages).to.deep.equal(CURRENT_MESSAGES);
  });
});
