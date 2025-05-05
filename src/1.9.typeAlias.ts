//Object Alias
type Student = {
    name: string,
    age: number,
    gender: string,
    contactNo?: string
}

const student1: Student =
{
    name: 'shoptorshi',
    age:14,
    gender:'female',
    contactNo:'grameen'
}

const student2: Student={
    name: 'ayesha',
    age:14,
    gender:'female'
}

//string alias
type Name= string;
type IsBoy=boolean;
let student3: Name='rahat' ;
let gender: IsBoy=true;

//function alias
type Addfunction=(a:number, b:number)=>number;
const add2:Addfunction =(x,y)=>x+y;

