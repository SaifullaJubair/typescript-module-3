//Arrow Function
const createArray = (param: string): string[] => {
   return [param]
}

//arrow function generic
const createArray1 = <T>(param: T): T[] => {
   return [param]
}

//normal function generic
function createArray2<T>(param: T): T[] {
   return [param]
}

const result = createArray("bangladesh")
const result1 = createArray1<number>(147570)
const result2 = createArray1<{ name: string, covid: boolean }>({ name: "bangladesh", covid: true })

//Tuple generic
const createArrayTuple = <X, Y>(param1: X, param2: Y): [X, Y] => {
   return [param1, param2]
}


const resultTuple = createArrayTuple<string, string>('country', "libration war");

const resultTuple2 = createArrayTuple<string, number>('bd', 1971);

const resultTuple3 = createArrayTuple<boolean, Array<string>>(true, ['firebase', 'html', 'css']);

const resultTuple4 = createArrayTuple<string, { post: string, salary: number, expresses: number }>('bd', {
   post: 'jrDeveloper',
   salary: 20000,
   expresses: 2
});

//spread operator
// const crush = 'kate';
// const myInfo = {
//    name: 'Kj',
//    salary: 100000
// }
// const newDate = { ...myInfo, crush }
// console.log(newDate);


// spread operator use in function
const myInfo = {
   name: 'Kj',
   salary: 100000
}
// const myCrush = (myInfo: object) => {
//    const crush = 'Samantha';
//    const myNewDate = { ...myInfo, crush };
//    return myNewDate
// }
const myCrush = <T>(myInfo: T) => {
   const crush = 'Samantha';
   const myNewDate = { ...myInfo, crush };
   return myNewDate
}

const crushUpdate = myCrush(myInfo)
console.log(crushUpdate);