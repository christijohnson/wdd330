// if error in try block, the code in the catch block will run
function imaginarySquareRoot(number) {
    'use strict';
    try {
        return String(squareRoot(number));
    } catch(error) {
        return squareRoot(-number)+'i';
    }
}

// adding the finally block
function imaginarySquareRoot(number) {
    'use strict';
    let answer;
    try {
        answer = String(squareRoot(number));
    } catch(error) {
        answer = squareRoot(-number)+'i';
    } finally {
        return `+ or - ${answer}`;
    }
}

// example test
function squareRoot(number) {
    'use strict';
    if (number < 0) {
        throw new RangeError("You can't find the square root of a negative number")
    }
    return Math.sqrt(number);
};

test('square root of 4 is 2', () => {
    expect(squareRoot(4)).toBe(2);
});