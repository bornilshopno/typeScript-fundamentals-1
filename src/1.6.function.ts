//TypeScript in funcitons

//Normal Function
function add(x: number, y: number=10): number {
    return x + y
}
//Arrow Function
const addArrow=(x:number,y:number):number=> x+y

//Method (function inside Object)
let poorUser={
    name:"Belal",
    balance:0,
    addBalance(balance:number):string{
       return `Belal's updated balance is ${this.balance+balance}`
    }
}