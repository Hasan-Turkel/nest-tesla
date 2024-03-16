import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Extra, ExtraDocument } from './extras.schema';
import { Model } from 'mongoose';

@Injectable()
export class ExtrasService {

    constructor(@InjectModel(Extra.name) private ExtraModel : Model<ExtraDocument>) {}


    async findAll() {
        return await this.ExtraModel.find()
    }
    async findOne(id) {
        return await this.ExtraModel.findById(id)
    }

    async create(extra) {

        const newExtra = new this.ExtraModel(extra)
        return await newExtra.save()
    }
    async update(id, extra) {
         
        return await this.ExtraModel.findByIdAndUpdate(id, extra, {new:true})
    }
    async delete(id) {
         
        return await this.ExtraModel.findByIdAndDelete(id)
    }
}
