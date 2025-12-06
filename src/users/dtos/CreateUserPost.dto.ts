import { IsString, IsArray, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CreateHashtag } from "./CreateHashtag.dto";

export class CreateUserPostDto {
    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateHashtag)
    hashtags: CreateHashtag[]
}