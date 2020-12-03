import { Router} from 'express'
import multer from 'multer'
import UserController from './controllers/UserController'
import uploadConfig from './config/upload'

const upload= multer(uploadConfig)

const routes = Router()
routes.post('/users', upload.array('user_image'), UserController.create)
routes.get('/users', UserController.list)
routes.delete('/users/:user_id', UserController.delete)




export default routes;
