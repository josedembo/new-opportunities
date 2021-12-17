import {
    Entity,
    Column,
    JoinColumn,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryColumn
} from "typeorm";

import { User } from "./User";
import { v4 as uuid } from "uuid";

@Entity("posts")
class Post {

    @PrimaryColumn()
    id: string;

    @Column()
    title: string

    @Column()
    type: string

    @Column()
    description: string

    @ManyToOne(() => User, user => user.id, { onDelete: "CASCADE" })
    @JoinColumn()
    user: User

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

}

export { Post }