import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ExtraDocument = HydratedDocument<Extra>

@Schema({
    timestamps: true,
  })
export class Extra {

    @Prop({
        trim: true,
        required: true,
        unique: true,
        type:String
    })
    extraname:string;

    @Prop({
        trim: true,
        required: true,
        unique: true,
        type:[{choicename:String, price:Number}]
    })
    choice:[{choicename:string, price:number}];

}

export const ExtraSchema = SchemaFactory.createForClass(Extra)