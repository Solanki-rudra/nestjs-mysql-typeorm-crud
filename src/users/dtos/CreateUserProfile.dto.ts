import { IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserProfileDto {
    @IsString()
    @MinLength(2)
    @MaxLength(10)
    firstName: string;
    
    @IsString()
    @MinLength(2)
    @MaxLength(10)
    lastName:string;

    @IsNumber()
    age:number;

    @IsString()
    dob:string;
}