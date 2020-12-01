import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'


@Entity('pets')
export default class Pet {
    @PrimaryGeneratedColumn()
    pet_id: number;

    @Column()
    pet_name: string;

    @Column()
    pet_raca: string;

    @Column()
    pet_about;

    

}