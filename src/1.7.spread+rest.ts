//Spread Operator

//inArray
const bros1=['Manna', 'Sabbir', 'Riyan']
const bros2=['Shahed', 'Shourav']
bros1.push(...bros2)

//inObject
const mentors1=
{no1:'kalam', no2:'salam'}
const mentors2={no3:'karim', no4:'rahim'}
const mentors12={...mentors1,...mentors2}

//Rest Operator
//normally it is defined as parameters mentioned-in example it takes 3 argument
const greetFriends=(friend1:string, friend2:string,friend3:string)=>{
    console.log(`Hi ${friend1}, ${friend2} and ${friend3}`)
}

greetFriends("Abul", "Babul", "Kabul")

//with rest operator
const greetFriendswithRest=(...friends:string[])=>{
    friends.forEach(friend=>
        console.log(`Hi ${friend}`)
    )
}

greetFriendswithRest("Abul", "Babul", "Kabul", "Bulbul") //here, function can be called with unlimited elements