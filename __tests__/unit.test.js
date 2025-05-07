// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

//function 1 - phone number
test('valid: dashes', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('valid: parentheses and space', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('invalid: missing digits', () => {
  expect(isPhoneNumber('123-45-7890')).toBe(false);
});
test('invalid: letters', () => {
  expect(isPhoneNumber('cry-abc-123')).toBe(false);
});

//function 2 - gmail
test('valid: standard email with capitalized letters', () => {
  expect(isEmail('trto1@anything.COM')).toBe(true);
});
test('valid: underscores', () => {
  expect(isEmail('tri_123@my_email.com')).toBe(true);
});
test('invalid: no @ symbol', () => {
  expect(isEmail('userexample.com')).toBe(false);
});
test('invalid: domain with more than 3 letters', () => {
  expect(isEmail('user@example.yahoo')).toBe(false);
});

//function 3 - passwords
test('valid: letters and numbers', () => {
  expect(isStrongPassword('A12345')).toBe(true);
});
test('valid: shorter password', () => {
  expect(isStrongPassword('dcab')).toBe(true);
});
test('invalid: start with a number', () => {
  expect(isStrongPassword('1badpass')).toBe(false);
});
test('invalid: special character', () => {
  expect(isStrongPassword('Bad@Pass')).toBe(false);
});


//function 4 - dates
test('valid: 1-digit day and month', () => {
  expect(isDate('1/2/2020')).toBe(true);
});
test('valid: mixed 2-digit month and 1-digit date', () => {
  expect(isDate('12/5/2022')).toBe(true);
});
test('invalid: shortened year format', () => {
  expect(isDate('12/25/22')).toBe(false);
});
test('invalid: dashes', () => {
  expect(isDate('01-01-2020')).toBe(false);
});


//function 5 - hex color
test('valid: 3-digit capitalized letters', () => {
  expect(isHexColor('#FFF')).toBe(true);
});
test('valid: 6-digit without hash', () => {
  expect(isHexColor('a1b2c3')).toBe(true);
});
test('invalid: 4 digits', () => {
  expect(isHexColor('#abcd')).toBe(false);
});
test('invalid: not numbers / a-f characters', () => {
  expect(isHexColor('#1234zz')).toBe(false);
});