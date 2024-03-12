import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './users.schema';
import { Model } from 'mongoose';
import { encodePassword } from 'src/utils/bcrypt';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private UserModel : Model<UserDocument>) {}


    async findAll() {
        return await this.UserModel.find()
    }
    async findOne(id) {
        return await this.UserModel.findById(id)
    }

    async create(user) {
        const password = encodePassword(user.password)
        const newUser = new this.UserModel({...user, password})
        return await newUser.save()
    }
    async update(id, user) {
         
        return await this.UserModel.findByIdAndUpdate(id, user, {new:true})
    }
    async delete(id) {
         
        return await this.UserModel.findByIdAndDelete(id)
    }
}
