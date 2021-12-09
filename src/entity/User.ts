import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from "typeorm";

@Entity()
class User {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

}

export { User }