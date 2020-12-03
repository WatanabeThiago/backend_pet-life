import { Request, Response } from 'express'
import { getRepository, getConnection} from 'typeorm'

import User from '../database/entity/User'

class UserController {
    async create(req: Request, res: Response) {
        const UserRepo = getRepository(User)
        const { user_email, user_name, user_password, user_cellphone }  = req.body;
        
        const requestImages = req.files as Express.Multer.File[]

       const user_image = requestImages.map((image) => {
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
                user_image
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

        console.log('🆗 Deletado.')

        res.send(`🆗 Usuario com ID ${user_id} foi deletado.`)
    }

}


export default new UserController()