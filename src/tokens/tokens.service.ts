import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Token, TokenDocument } from './tokens.schema';
import { Model } from 'mongoose';

@Injectable()
export class TokensService {

    constructor(@InjectModel(Token.name) private TokenModel : Model<TokenDocument>) {}

    async findAll() {
        return await this.TokenModel.find()
    }
    async findOne(id) {
        return await this.TokenModel.findById(id)
    }

    async create(token) {
        const newToken = new this.TokenModel(token)
        return await newToken.save()
    }
    async update(id, token) {
         
        return await this.TokenModel.findByIdAndUpdate(id, token, {new:true})
    }
    async delete(id) {
         
        return await this.TokenModel.findByIdAndDelete(id)
    }
}
