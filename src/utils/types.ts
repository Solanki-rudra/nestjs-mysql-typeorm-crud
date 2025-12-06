export type TCreateUserParams = {
    username:string;
    password:string;
    email:string;
}

export type TUpdateUserParams = {
    username?:string;
    password?:string;
    email?:string;
}

export type TCreateProfileParams = {
    firstName:string;
    lastName:string;
    age:number;
    dob:string
}

export type TCreatePostParams = {
    title:string;
    description:string;
}