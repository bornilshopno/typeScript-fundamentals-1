//Basic Type-Non Primitive
//Object

let human : {
    readonly name: string; //access modifier readonly
    nationality:'Bangladeshi'; //type=> literal types <=when value becomes a type
    age: number;
    isMarried?: boolean; //optional type
    location: string
}= {
    name: 'manna',
    nationality:'Bangladeshi',
    age: 37,
    isMarried: true,
    location: "Sreemangal"
}