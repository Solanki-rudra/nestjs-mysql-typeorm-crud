import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { CreateUserPostDto } from 'src/users/dtos/CreateUserPost.dto';
import { CreateUserProfileDto } from 'src/users/dtos/CreateUserProfile.dto';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) { }

    @Get()
    getUsers() {
        return this.userService.findUsers()
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto)
    }

    @Put(':id')
    async updateUser(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
        return await this.userService.updateUser(id, updateUserDto)
    }

    @Delete(':id')
    async deleteUser(@Param('id', ParseIntPipe) id: number) {
        return await this.userService.deleteUser(id)
    }

    @Post(':id/profile')
    async createUserProfile(@Param('id', ParseIntPipe) id:number, @Body() createProfileDto:CreateUserProfileDto){
        return await this.userService.createUserProfile(id, createProfileDto)
    }

    @Post(':id/posts')
    async createUserPost(@Param('id', ParseIntPipe) id:number, @Body() createPost:CreateUserPostDto){
        return await this.userService.createUserPost(id, createPost)
    }
}
