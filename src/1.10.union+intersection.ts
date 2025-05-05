//union type

type Student2=    'male'|'female' 
type Age= string | number;
const rahat:Student2= 'male'

const age1:Age= 60 
const age2:Age='sixty'

//intersaction type
type FrontEndDeveloper={
    skills:string[];
    designation1:"Frontend Developer"
}
type BackEndDeveloper={
    skills:string[];
    designation2:"Backend Developer"
}

type FullStack= FrontEndDeveloper & BackEndDeveloper;

const fullstackDeveloper :FullStack={
    skills:['html','css','express',],
    designation1:'Frontend Developer',
    designation2:'Backend Developer'

}