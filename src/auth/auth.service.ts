import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../users/users.schema';
import { Model } from 'mongoose';
import { encodePassword } from 'src/utils/bcrypt';
import { Token, TokenDocument } from 'src/tokens/tokens.schema';

@Injectable()
export class AuthService {

    constructor(@InjectModel(User.name) private UserModel : Model<UserDocument>,
    @InjectModel(Token.name) private TokenModel : Model<TokenDocument>
    ) {}

    async login(email, password) {
        let user = await this.UserModel.findOne({email:email});
        if (user?.password !== encodePassword(password)) {
            throw new UnauthorizedException();
          }
          let tokenData = await this.TokenModel.findOne({ user_id: user._id })
          if (!tokenData) tokenData = await this.TokenModel.create({
              user_id: user._id,
              token: encodePassword(user._id + Date.now().toString())
          })

          return  {user, token: tokenData.token,
          }}

    async register(user) {
        const password = encodePassword(user.password)
        const newUser = new this.UserModel({...user, password})
       const tokenData = await this.TokenModel.create({
            user_id: user._id,
            token: encodePassword(+user._id + Date.now())
        })
            return {newUser, token:tokenData} }
  
 
}
