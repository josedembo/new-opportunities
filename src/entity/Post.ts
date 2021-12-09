import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";

import { User } from "./User"

@Entity()
class Post {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    type: string

    @Column()
    description: string

    @ManyToOne(() => User, user => user.id)
    @JoinColumn()
    user: User

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

}

export { Post }