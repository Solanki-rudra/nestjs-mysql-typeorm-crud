import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";

@Entity({name:'hashtag'})
export class Hashtag{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    @ManyToMany(()=>Post, post => post.hashtags)
    posts:Post[]
}