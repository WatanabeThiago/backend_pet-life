import express from 'express'
import './database/connect'
import 'reflect-metadata'
import routes from './routes'
const app = express()

app.use(express.json())
app.use(routes)


app.listen(3000, () => console.log('🆗 [SERVIDOR] Iniciado na porta 3000!'))