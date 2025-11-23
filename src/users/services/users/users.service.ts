import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { TCreateUserParams, TUpdateUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { successResponse } from 'src/utils/helper';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    findUsers() {
        return this.userRepository.find()
    }

    async createUser(userDetails: TCreateUserParams) {
        let hashedPassword = await bcrypt.hash(userDetails.password, 10)
        const newUser = this.userRepository.create({ ...userDetails, password: hashedPassword, createdAt: new Date() })
        await this.userRepository.save(newUser)
        return successResponse('User Created Successfully', newUser)
    }

    async updateUser(id: number, userDetails: TUpdateUserParams) {
        const user = await this.userRepository.findOneBy({ id });
        if (!user) throw new NotFoundException(`User with ID ${id} not found`);
        const updateData: any = { ...userDetails };
        if (userDetails.password) {
            updateData.password = await bcrypt.hash(userDetails.password, 10);
        }
        await this.userRepository.update({ id }, updateData);
        return { message: 'User updated successfully' };
    }


    async deleteUser(id: number) {
        const result = await this.userRepository.delete(id)
        if (result.affected === 0) throw new NotFoundException(`User Not Found`)
        return { message: 'User Deleted Successfully' }
    }
}
