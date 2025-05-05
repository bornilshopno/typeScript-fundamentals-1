//Basic Data Types

//Basic-Primitive

//String
let firstName: string = 'Ashraf'
//Number
let rollNumber: number = 106658
//Boolean
let isMarried: boolean = true
//Undefined
let x: undefined = undefined
//Null
let y: null = null
//Any---in other meaning avoiding typescript
let d;

//Basic-NonPrimitive Data Types
//Array
let friends: string[] = ['Rakib', 'Saiful']
let ages: number[] = [37, 31, 3]
//Tuple---special type of array
let myself: [string, number, boolean] = ['Manna', 37, true]
let arr1: number[] = [1, 2, 3]
let newarr1: number[] = arr1.map((x: number): number => x * x)

//Object
let human1: {
    readonly name: string; //access modifier readonly
    nationality: 'Bangladeshi'; //type=> literal types <=when value becomes a type
    age: number;
    isMarried?: boolean; //optional type
    location: string
} = {
    name: 'manna',
    nationality: 'Bangladeshi',
    age: 37,
    isMarried: true,
    location: "Sreemangal"
}