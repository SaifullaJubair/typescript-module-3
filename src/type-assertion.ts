// type assertion 

let course: any;

course = 'Next level web development';
//syntax
(course as string).length;
<string>course.length;

//example 02
function kgToGram(param: string | number): string | number | undefined {
   if (typeof param === 'string') {
      const value = parseFloat(param) * 1000;
      return `The converted result is: ${value} gram`
   }
   if (typeof param === 'number') {
      const value = param * 1000;
      return `The converted result is: ${value} gram`
   }
}
const resultToBeNumber = kgToGram(1000) as number;
const resultToBeString = <string>kgToGram('1000');