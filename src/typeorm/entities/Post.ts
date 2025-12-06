import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Hashtag } from "./Hashtag";

@Entity({name: 'user_posts'})
export class Post {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    @Column()
    description:string;

    @ManyToOne(() => User, user => user.posts, { onDelete: "CASCADE" })
    user: User

    @ManyToMany(() => Hashtag, hashtag => hashtag.posts)
    @JoinTable({name:'post_hashtag'})
    hashtags:Hashtag[]
}