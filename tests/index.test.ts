import { addTwoNumbers, multiplyTwoNumbers, divideTwoNumbers, squareTwoNumbers } from '../src/index';

/**
 * @tags GIDP-1
 */

describe('addTwoNumbers', () => {
    /**
    * @tags GIDP-1
    */
  it('adds two numbers', () => {
    expect(addTwoNumbers(1, 2)).toEqual(3);
  });
});

describe('multiplyTwoNumbers', () => {
    /**
    * @tags GIDP-3
    */
  it('multiplies two numbers', () => {
    expect(multiplyTwoNumbers(1, 2)).toEqual(2);
  });
});

describe('divideTwoNumbers', () => {
  it('divides two numbers', () => {
    expect(divideTwoNumbers(1, 2)).toEqual(0.5);
  });
});

describe('squareTwoNumbers', () => {
  it('squares two numbers', () => {
    expect(squareTwoNumbers(2, 2)).toEqual(4);
  });
});