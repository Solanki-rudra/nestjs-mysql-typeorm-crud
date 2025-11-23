import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";

export class UpdateUserDto {
    @IsString()
    @IsOptional()
    username?:string;

    @IsOptional()
    @IsEmail()
    email?:string;

    @IsOptional()
    @IsString()
    @MinLength(6)
    password?:string;
}