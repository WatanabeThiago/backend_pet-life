import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

import User from './User'
import Pet_Photo from './Pet_Photo'

@Entity('pets')
export default class Pet {
    @PrimaryGeneratedColumn()
    pet_id: number;

    @Column()
    pet_name: string;

    @Column()
    pet_raca: string;

    @Column()
    pet_about: string;

    @Column()
    pet_user_id: number;


    @ManyToOne(() => User, (user) => user.pet)
    @JoinColumn({ name: 'user_id'})
    user: User;

    @OneToMany(() => Pet_Photo, (pet_photo) => pet_photo.pet)
    pet_photo: Pet_Photo;
}