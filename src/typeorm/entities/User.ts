import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn({type:'bigint'})
    id: number

    @Column()
    username: string

    @Column()
    email:string

    @Exclude()
    @Column()
    password: string

    @Column()
    createdAt: Date

    @Column({nullable:true})
    authStrategy: string
}