//nullable type

const searchName=(value:string | null)=>{
    if(value){
        console.log('searching')
    }
    else {
        console.log("There is nothing to search")
    }
}

searchName(null)

//unknown types-type assigned later after declation

const getSpeedInMeterPerSecond=(value:unknown)=>{
if (typeof value === "number"){
   let convertedSpeed= (value*1000)/3600
   console.log(` speed is ${convertedSpeed} ms^-1`)
}

else if(typeof value==="string"){
    const [speed,unit]=value.split(" ")
    const convertedSpeed=(parseFloat(speed)*1000/3600)
    console.log(` speed is ${convertedSpeed} ms^-1`)
}

else{
    console.log("wrong input")
}
}
getSpeedInMeterPerSecond("40 kmh^-1")

//never-never returns anything
const throwError=(msg:string)=>{
    throw new Error(msg)
}

throwError("somehow got error")