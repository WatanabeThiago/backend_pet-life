import { Request, Response } from 'express'
import { getRepository, getConnection} from 'typeorm'

import User from '../database/entity/User'

class UserController {
    async create(req: Request, res: Response) {
        const UserRepo = getRepository(User)
        const { user_email, user_name, user_password, user_cellphone }  = req.body;
        
        const requestImages = req.files as Express.Multer.File[]

       

        const userExists = await UserRepo.findOne({ where: {user_email}})

        if(userExists){
            return res.json('Usuario já existe.')
        }

        try {
            const user = UserRepo.create({
                ...req.body,
        
            })
            return res.json(user);

        } catch (error) {
            return res.status(401).json({
                message: "ERRO",
                info: error,
            });
        }


    }


}


export default new UserController()