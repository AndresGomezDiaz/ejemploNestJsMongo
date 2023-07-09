import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Request } from 'express';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor( 
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>, 
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.userModel.create(createUserDto);
  }

  async findAll(request: Request): Promise<User[]> {
    return this.userModel
    .find(request.query)
    .setOptions({sanitizeFilter: true})
    .exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById({_id: id}).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate({_id: id}, this.userModel, {
      new: true,
    });
  }

  async remove(id: string): Promise<User> {
    return this.userModel.findByIdAndRemove({_id: id}).exec();
  }
}
