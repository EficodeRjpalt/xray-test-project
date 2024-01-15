import { addTwoNumbers, multiplyTwoNumbers, divideTwoNumbers, squareTwoNumbers } from '../src/index';

describe('GIDP-2', () => {
it('adds two numbers', () => {
    expect(addTwoNumbers(1, 2)).toEqual(3);
});
});

describe('GIDP-2', () => {
it('multiplies two numbers', () => {
    expect(multiplyTwoNumbers(1, 2)).toEqual(2);
});
});

describe('GIDP-2', () => {
it('divides two numbers', () => {
    expect(divideTwoNumbers(1, 2)).toEqual(0.5);
});
});

describe('GIDP-2', () => {
it('squares two numbers', () => {
    expect(squareTwoNumbers(2, 2)).toEqual(4);
});
});
