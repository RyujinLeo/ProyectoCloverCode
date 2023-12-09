import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
//import routerPins from './src/routers/pins.router'
//import routerBoards from './src/routers/boards.router'
import routerUsers from './src/routers/usuario.router'
import { Database } from './src/utils/database';
dotenv.config();
const db:Database = new Database(); //SE conecta
const app: Express = express();
const port: string | undefined = process.env.PORT; //3000
import cors from 'cors';

app.use(cors({
  origin: '*',
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use(express.json()); //Poblar el objeto body
//app.use('/pins', routerPins);
//app.use('/boards', routerBoards);
app.use('/usuarios', routerUsers);
//cors

app.get('/', (peticion: Request, respuesta: Response) => {
    respuesta.send('Backend de clovercode');
  });
  
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });