"use strict";
// type assertion 
let course;
course = 'Next level web development';
//syntax
course.length;
course.length;
//example 02
function kgToGram(param) {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `The converted result is: ${value} gram`;
    }
    if (typeof param === 'number') {
        const value = param * 1000;
        return `The converted result is: ${value} gram`;
    }
}
const resultToBeNumber = kgToGram(1000);
const resultToBeString = kgToGram('1000');
