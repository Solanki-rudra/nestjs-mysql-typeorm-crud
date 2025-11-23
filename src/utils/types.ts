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