export interface UserModel{
    
    id:number
    name:string
    username:string
    email:string
    company:{
        name:string
        catchPhrase:string
        bs:string
    }
}