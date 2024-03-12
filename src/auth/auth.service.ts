import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../users/users.schema';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {

    constructor(@InjectModel(User.name) private UserModel : Model<UserDocument>) {}

    async login(email, password) {
        const user = await this.UserModel.findOne({email:email});
        if (user?.password !== password) {
            throw new UnauthorizedException();
          }
          return user; }

    async register(user) {
            const newUser = new this.UserModel(user)
            return await newUser.save() }
 
}
