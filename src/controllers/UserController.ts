import { Request, Response } from 'express'
import { getRepository, getConnection} from 'typeorm'
const fs = require('fs');

import User from '../database/entity/User'
import User_Image from '../database/entity/User_Image'

class UserController {
    async create(req: Request, res: Response) {
        const UserRepo = getRepository(User)
        const { user_email, user_name, user_password, user_cellphone }  = req.body;
        
        const requestImages = req.files as Express.Multer.File[]

       const image_user = requestImages.map((image) => {
           return { path: image.filename}
       })

        const userExists = await UserRepo.findOne({ where: {user_email}})

        if(userExists){
            return res.json('⛔ Usuario já existe.')
        }
        else{
            console.log('🆗 Usuario NAO EXISTE')
        }

        try {
            const user = UserRepo.create({
                ...req.body,
                image_user
            })

            await UserRepo.save(user)
            return res.json(user);


        } catch (err) {
            return res.status(401).json({
                message: "ERRO",
                info: err,
            });
        }


    }

    async list(req: Request, res: Response) {
        const UserRepo = getRepository(User)

        const users = await UserRepo.find()

        return res.json(users)

    }

    async delete(req: Request, res: Response) {
        const UserRepo = getRepository(User)
        const ImageRepo = getRepository(User_Image)
        const user_id = req.params.user_id;

        const userExists = await UserRepo.findOne({where: {user_id}})

        if(!userExists){
            return res.json('❌ Usuário não existe.')
        }

        await getConnection()
        .createQueryBuilder()
        .delete()
        .from(User)
        .where({user_id})
        .execute()

        await getConnection()
        .createQueryBuilder()
        .delete()
        .from(User_Image)
        .where({user_id})
        .execute()

        console.log('🆗 Deletado.')

        res.send(`🆗 Usuario com ID ${user_id} foi deletado.`)
    }

}


export default new UserController()