//type alias in array
type RollNumber = number[]
const rollNumber: RollNumber = [1, 2, 3, 4, 5];

//interface in array
interface IRoll {
   [index: number]: number // jehetu array element index akare hoy tai interface a index diye assign korte hobe; [index signature]
}

const roll: IRoll = [1, 2, 3, 4]

//type alias in object
type User = {
   name: string;
   age: number
}
//type alias extended object

type ExtendedUser = User & {
   roll: string;
}

const user: ExtendedUser = {
   name: ' type alias',
   roll: 'extended',
   age: 20
}

//type interface in object

interface User1 {
   name: string;
   age: number
}

//type extended interface in object
interface EUser1 extends User1 {
   roll: string;
}

const eUser: EUser1 = {
   name: 'interface',
   roll: 'extended',
   age: 20
}


//using type alias in function 

type AddNum = (num1: number, num2: number) => number;

const addNum: AddNum = (num1, num2) => num1 + num2;

//using interface in function

interface MultiplyNum {
   (x: number, y: number): number;  // using interface in function not recommended
}

const multiplyNum: MultiplyNum = (x, y) => x * y;

