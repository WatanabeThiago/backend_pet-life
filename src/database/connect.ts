import { createConnection} from 'typeorm'

createConnection().then(() => console.log('🆗[BANCO DE DADOS] Conectado ao banco de dados "pet_life".'))