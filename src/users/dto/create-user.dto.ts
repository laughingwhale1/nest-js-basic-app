import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";


export class CreateUserDto {
    @ApiProperty({example: 'example@mail.com', description: 'Email'})
    @IsString({message: 'Must be a string'})
    @IsEmail({}, {message: 'Not correct email'})
    readonly email: string;

    @IsString({message: 'Must be a string'})
    @Length(4, 16, {message: 'Pwd must be between 4 and 16 chars long'})
    @ApiProperty({example: 'qwerty123', description: 'Password'})
    readonly password: string;
}