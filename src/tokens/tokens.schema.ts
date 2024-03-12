import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { User } from '../users/users.schema';

export type TokenDocument = HydratedDocument<Token>

@Schema()
export class Token {

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true,
    })
    user_id: User

    @Prop({
        trim: true,
        required: true,
        index: true,
    } )
    token: string

}

export const TokenSchema = SchemaFactory.createForClass(Token)