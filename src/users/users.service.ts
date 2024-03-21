import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './users.schema';
import { Model } from 'mongoose';
import { encodePassword } from '../utils/bcrypt';
import { Token, TokenDocument } from '../tokens/tokens.schema';


@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private UserModel : Model<UserDocument>,
    @InjectModel(Token.name) private TokenModel : Model<TokenDocument>) {}


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
    async update(id, user, Authorization) {

        if(user.order){

            const tokenKey = Authorization ? Authorization.split(' ') : null 
            let currentUser:any
        if (tokenKey && tokenKey[0] == 'Token') { // SimpleToken

            const tokenData = await this.TokenModel.findOne({ token: tokenKey[1] }).populate('user_id')
            currentUser = tokenData ? tokenData.user_id : undefined

        } 
            
            const userorders = currentUser.userorders
            userorders.push(user.order)

            // console.log({...currentUser, userorders:userorders});
            
            return await this.UserModel.findByIdAndUpdate(currentUser._id, {userorders:userorders}, {new:true})
        }else {
            // console.log(user);
        
            return await this.UserModel.findByIdAndUpdate(id, user, {new:true})}
         
        
    }
    async delete(id) {
         
        return await this.UserModel.findByIdAndDelete(id)
    }
}
