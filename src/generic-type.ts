const rollNumber1: Array<number> = [44, 66, 12, 78];
const rollNumber2: Array<string> = ['44', '66', '12', '78'];
const rollNumber3: Array<boolean> = [true, false];
const arryObject: Array<{ name: string; roll: number }> = [
   {
      name: 'sj',
      roll: 1
   }, {
      name: 'mumin',
      roll: 2
   }
]


// Generic type

type GenericArray<T> = Array<T>

const usersName: GenericArray<string> = ['Rana', 'sj']
const usersRoll: GenericArray<number> = [24, 15, 20]
const usersPassed: GenericArray<boolean> = [true, false]




type GenericTuple<X, Y> = [X, Y];

const relation: GenericTuple<string, string> = ['rana', 'bubli'];

// type RelationInSalary = { name: string, salary: number };

interface RelationInSalary {
   name: string;
   salary: number
}
const relationWithSalary: GenericTuple<RelationInSalary, string> = [
   {
      name: 'senior',
      salary: 40000
   },
   'rana'
]
const relationWithSalary2: GenericTuple<RelationInSalary, string> = [
   {
      name: 'Junior',
      salary: 20000
   },
   'bubli'
]