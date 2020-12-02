import { PrimaryGeneratedColumn, Entity, Column, ManyToMany, ManyToOne, JoinColumn } from 'typeorm'

import User from './User'

@Entity('Image_User')
export default class Image_User {
    @PrimaryGeneratedColumn('increment')
    u_image_id: number;

    @Column()
    path: string;

    @ManyToOne(() => User, (user) => user.user_image)
    @JoinColumn({ name: 'user_id'})
    user: User;
}