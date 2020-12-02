import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import Pet from './Pet'

@Entity('PhotoPets')
export default class Pet_Photo {
    @PrimaryGeneratedColumn('increment')
    p_photo_id: number;

    @Column()
    path: string;

    @ManyToOne(() => Pet, (pet) => pet.user)
    pet: Pet;

}