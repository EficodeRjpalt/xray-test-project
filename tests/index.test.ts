import { addTwoNumbers, multiplyTwoNumbers, divideTwoNumbers } from '../src/index';

describe('addTwoNumbers', () => {
  it('adds two numbers', () => {
    expect(addTwoNumbers(1, 2)).toEqual(3);
  });
});

describe('multiplyTwoNumbers', () => {
  it('multiplies two numbers', () => {
    expect(multiplyTwoNumbers(1, 2)).toEqual(2);
  });
});

describe('divideTwoNumbers', () => {
  it('divides two numbers', () => {
    expect(divideTwoNumbers(1, 2)).toEqual(0.5);
  });
});