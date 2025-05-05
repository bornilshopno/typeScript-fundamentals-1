//ternary

let age:number= 15
const isAdult= age>=18 ? 'adult' :'non-adult'
console.log(isAdult) 

//nullish coalescing operator
// only in case of decision making bu null/. so it dont care about any empty object/string/element. only matters about null/undefined

const isAuthenticated=null;
const result1= isAuthenticated ?? "Guest"
const result2= isAuthenticated ? isAuthenticated : "Guest"
console.log({result1}, {result2})

const isLoggedIn=""
const result3= isLoggedIn ?? "Guest"
const result4= isLoggedIn ? isLoggedIn : "Guest"
console.log({result3}, {result4})


//further example
type User={
    name: string;
    address:{
        city:string;
        road:string;
        presentAddress:string;
        parmanentAddress?:string;
    }
}
const saifulMia:User={
    name:'Saiful',
    address:{
        city:'Sylhet',
        road:'Nayapara',
        presentAddress:'Hetimganj'
    }
}

let permanentAddSaiful=saifulMia?.address?.parmanentAddress ?? "Has No Permanent Address" //assigned nullish coalescing operator
console.log({permanentAddSaiful})