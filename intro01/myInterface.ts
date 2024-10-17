interface User{
    readonly dbId:number
    email:string,
    userId:number
    googleId?:string
    startTrail:()=>string
}

const harsh:User={dbId:22,email:"h.com",
    userId:2211,
    startTrail:()=>{
        return "trail stated"
    }

}

harsh.email="ha.com"
