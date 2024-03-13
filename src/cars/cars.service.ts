import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Car, CarDocument } from './cars.schema';
import { Model } from 'mongoose';
import { encodePassword } from 'src/utils/bcrypt';

@Injectable()
export class CarsService {

    constructor(@InjectModel(Car.name) private CarModel : Model<CarDocument>) {}


    async findAll() {
        return await this.CarModel.find()
    }
    async findOne(id) {
        return await this.CarModel.findById(id)
    }

    async create(car) {
        const newCar = new this.CarModel(car)
        return await newCar.save()
    }
    async update(id, car) {
         
        return await this.CarModel.findByIdAndUpdate(id, car, {new:true})
    }
    async delete(id) {
         
        return await this.CarModel.findByIdAndDelete(id)
    }
}
