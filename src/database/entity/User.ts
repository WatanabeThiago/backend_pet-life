import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, BeforeRemove, OneToMany} from 'typeorm'
import bcrypt from 'bcryptjs'

import User_Image from './User_Image'
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
    user_cellphone: number;

    @BeforeInsert()
    @BeforeUpdate()
    @BeforeRemove()
    hashPassword() {
        this.user_password = bcrypt.hashSync(this.user_password, 8)
    }

    @OneToMany(() => User_Image, (user_image) => user_image.user)
    user_image: User_Image;

    @OneToMany(() => Pet, (pet) => pet.user)
    pet: Pet

}


