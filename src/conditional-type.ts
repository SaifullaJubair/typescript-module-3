//a type is dependent of another type

type a1 = null;
type a2 = a1 extends string ? string : null // a2 = null
type a3 = undefined;
type a4 = number
// nested conditional type

type b = a1 extends null ? null : a3 extends number ? number : a4 extends null ? null : never;

type Milon = {
   wife: string;
   wife2: string;
}

type A = keyof Milon;
type CheckProperty<T, k> = k extends A ? true : false

type checkWife3 = CheckProperty<Milon, 'wife3'>;

// remove

type F = "Mango" | "Jackfruit" | 'Apple'

type RemoveApple<T, K> = T extends K ? never : T
type CurrentFruit = RemoveApple<F, 'Apple'>;

