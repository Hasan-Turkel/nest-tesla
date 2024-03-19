import { IsEmail, IsNotEmpty, Matches } from 'class-validator';

export class CreateUserDto{

username:string

@Matches(RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.]).{8,}$/))
password:string

@IsEmail()
email:string

userorders:[]

}

export class CreateTokenDto{

user_id:string
token:string

}
export class CreateExtraDto{

    extraname:string;
    choice:[{choicename:string, price:number}];

}

export class CreateCarDto{

carname:string
carimg:string;
model:[{modelname:string, property:string, price:number, range:number, topspeed:number, mph:number}]
paint:[{paintname:string, price:number}]
wheels:[{wheelname:string, price:number}]
interior:[{interiorname:string, price:number}]
steering:[{steeringname:string, price:number}]
extras:any
}
export class SendOrderDto{

order:any
}