import { IsString } from "class-validator";

export class CreateHashtag{
    @IsString()
    title:string
}