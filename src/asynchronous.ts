//Mocking // string
const makePromise = (): Promise<string> => {
   return new Promise<string>((resolve, reject) => {
      const data: string = " Data is Fetched"

      if (data) {
         resolve(data)
      }
      else { reject('Failed to fetched  data!'); }
   })
}
const getPromiseData = async (): Promise<string> => {
   const data = await makePromise()
   return data
}


//Mocking // number
const makePromiseNumber = (): Promise<number> => {
   return new Promise<number>((resolve, reject) => {
      const data: number = 458

      if (data) {
         resolve(data)
      }
      else { reject('Failed to fetched  data!'); }
   })
}
const getPromiseDataNumber = async (): Promise<number> => {
   const data = await makePromiseNumber()
   return data
}


//json placeholder

interface ITodo {
   userId: number;
   id: number;
   title: string;
   completed: boolean;
}

const getTodo = async (): Promise<ITodo> => {
   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
   return await response.json()
}
const getTodoData = async (): Promise<void> => {
   const result = await getTodo()
   console.log(result);
}
getTodoData()