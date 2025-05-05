//Object destructuring
const user1 = {
    id: 245,
    name: {
        firstName: 'Ashraf',
        middleName: 'Hossain',
        lastName: 'Manna'
    },
    contactNo: "01911199697",
    address: "Sremangal"
};

const { contactNo, name:{middleName:midName} } = user1;//cannot mention type insider distructuring 

//Array Distructuring

const myFriends1=[ 'Rakib', 'Saiful', 'Sohel', 'Juwel', 'Manir']

const [a,b,bestFriend,...rest]= myFriends1