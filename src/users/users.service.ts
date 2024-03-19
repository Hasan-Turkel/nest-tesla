import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './users.schema';
import { Model } from 'mongoose';
import { encodePassword } from 'src/utils/bcrypt';
import { log } from 'console';

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


        console.log(user);
        
        if(user.order){
            const currentUser = await this.UserModel.findById(id);
            const userorders = currentUser.userorders
            userorders.push(user.order)

            console.log({...currentUser, userorders:userorders});
            
            return await this.UserModel.findByIdAndUpdate(id, {userorders:userorders}, {new:true})
        }else {console.log(user);
        
            return await this.UserModel.findByIdAndUpdate(id, user, {new:true})}
         
        
    }
    async delete(id) {
         
        return await this.UserModel.findByIdAndDelete(id)
    }
}
