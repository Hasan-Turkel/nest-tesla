import { IsEmail, IsNotEmpty, Matches } from 'class-validator';

export class CreateUserDto{

username:string

@Matches(RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.]).{8,}$/))
password:string

@IsEmail()
email:string

}

export class CreateTokenDto{

user_id:string
token:string

}