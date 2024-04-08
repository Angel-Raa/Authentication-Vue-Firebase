export interface Login {
  email: string
  password: string
}

export interface Register {
  username: string
  email: string
  password: string
}

export interface User {
  email: string
  
}

export interface Urls {
  id?:{
    name?:string
    short?:string
    user?:string
  } 
  
}