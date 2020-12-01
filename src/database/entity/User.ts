import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, BeforeRemove, OneToMany} from 'typeorm'
import bcrypt from 'bcryptjs'



@Entity('users')
export default class User {
    @PrimaryGeneratedColumn('increment')
    user_id: number;

    @Column()
    user_email: string;

    @Column()
    user_name: string;

    @Column()
    user_password: string;

    @Column()
    user_cellphone: number;

    @BeforeInsert()
    @BeforeUpdate()
    @BeforeRemove()
    hashPassword() {
        this.user_password = bcrypt.hashSync(this.user_password, 8)
    }

   

}


