//generic interface

interface CrushInterface<T> {
   name: string;
   husband: T
}

const crush1: CrushInterface<boolean> = { name: 'Samantha', husband: true };

const crush2: CrushInterface<string> = {
   name: 'snow', husband: 'mojnu'
};


interface CrushHusbandI {
   name: string;
   salary: number
}
const crush3: CrushInterface<CrushHusbandI> = {
   name: 'snow',
   husband: {
      name: 'rana',
      salary: 200000
   }
};

interface PersonInterface<T, U = undefined> {
   name: string;
   age: number;
   Wife: T;
   Address?: U
}

interface PersonWifeInterface { name: string, age: number };
interface PersonAddressInterface { city: string, road: number };
const ranaInfo: PersonInterface<PersonWifeInterface, PersonAddressInterface> = {
   name: 'Rana',
   age: 20,
   Wife: {
      name: 'rini',
      age: 18
   },
   Address: {
      city: 'Satkhira',
      road: 2
   }
}

