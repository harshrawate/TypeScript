const user={
    name:"harsh",
    email:"harsh.com",
    isActive:true,
}

function createUser({name:string,isPaid:boolean}){}

createUser({name:"harsh",isPaid:false})

type User={
    name:string,
    email:string,
    isActive:boolean
}

function createUsers(user:User):User{
    return {name:"",email:"",isActive:true}
}

createUsers({name:"",email:"",isActive:true})
export {}