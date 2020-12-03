import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, BeforeRemove, OneToMany} from 'typeorm'
import bcrypt from 'bcryptjs'

import Image_User from './User_Image'
import Pet from './Pet'

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
    user_cellphone: string;

    @BeforeInsert()
    @BeforeUpdate()
    @BeforeRemove()
    hashPassword() {
        this.user_password = bcrypt.hashSync(this.user_password, 8)
    }

    @OneToMany(() => Image_User, (image_user) => image_user.user)
    image_user: Image_User[];

    @OneToMany(() => Pet, (pet) => pet.user)
    pet: Pet[]

}


