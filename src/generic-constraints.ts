interface MyInformation {
   name: string;
   age: number;
}
const myInformation = {
   name: 'sj',
   age: 20,
   role: 'jr',
   salary: 120000
}

interface Mandatory {
   salary: number, role: string
}

const myInfoEx = <T extends Mandatory>(myInformation: T) => {
   const wife = 'kate';
   const fullInfo = { ...myInformation, wife }
   return fullInfo
}

const resultMyInfo = myInfoEx(myInformation)
console.log(resultMyInfo);