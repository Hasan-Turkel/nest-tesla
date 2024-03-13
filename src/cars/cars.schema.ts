import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type CarDocument = HydratedDocument<Car>

@Schema({
    timestamps: true,
  })
export class Car {

    @Prop({
        trim: true,
        required: true,
        unique: true,
        type:String
    })
    carname:string;

    @Prop({
        trim: true,
        required: true,
        unique: true,
        type:[{modelname:String, price:Number}]
    })
    model:[{modelname:string, price:number}];

    @Prop()
    range:number

    @Prop()
    topspeed:number

    @Prop()
    mph:number

    @Prop()
    paint:[{paintname:string, price:number}]

    @Prop()
    wheels:[{wheelname:string, price:number}]

    @Prop()
    interior:[{interiorname:string, price:number}]

    @Prop()
    steering:[{steeringname:string, price:number}]

    @Prop({type: mongoose.Schema.Types.Mixed})
    extras:any
}

export const CarSchema = SchemaFactory.createForClass(Car)