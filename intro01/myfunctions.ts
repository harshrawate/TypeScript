function addTwo(num:number):number{
    return num+2
}

const getHello=(s:string):string=>{
    return ""
}

addTwo(5)

function getUpper(val:string){
    return val.toUpperCase()
}
getUpper("harsh")

function signUpUser(name:string,email:string,isPaid:boolean=false){

}
signUpUser("harsh","harshrawate@gmail.com",false)

let loginUser=(name:string,email:string,isPaid:boolean)=>{

}
loginUser("h","h@.com",true)

function consoleError(errmsg:string):void{
    console.log(errmsg);
}

function handleError(errmsg:string):never{
    throw new Error(errmsg);
}

export {}