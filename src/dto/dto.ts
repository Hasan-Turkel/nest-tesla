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
export class CreateCarDto{

carname:string
model:[{modelname:string, price:number}]
range:number
topspeed:number
mph:number
paint:[{paintname:string, price:number}]
wheels:[{wheelname:string, price:number}]
interior:[{interiorname:string, price:number}]
steering:[{steeringname:string, price:number}]
extras:any
}