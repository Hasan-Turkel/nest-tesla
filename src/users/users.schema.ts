import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>

@Schema({
    timestamps: true,
  })
export class User {

    @Prop({
        trim: true,
        required: true,
        unique: true,
        index: true,
        type:String
    })
    username:string;

    @Prop({
        trim: true,
        required: true,
        unique: true,
        index: true,
        type:String
    })
    email:string;

    @Prop( {trim: true,
        required: true,
        index: true,
        type:String})
    password:string
}

export const UserSchema = SchemaFactory.createForClass(User)