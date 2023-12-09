"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//import routerPins from './src/routers/pins.router'
//import routerBoards from './src/routers/boards.router'
const usuario_router_1 = __importDefault(require("./src/routers/usuario.router"));
const database_1 = require("./src/utils/database");
dotenv_1.default.config();
const db = new database_1.Database(); //SE conecta
const app = (0, express_1.default)();
const port = process.env.PORT; //3000
const cors_1 = __importDefault(require("cors"));
app.use((0, cors_1.default)({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));
app.use(express_1.default.json()); //Poblar el objeto body
//app.use('/pins', routerPins);
//app.use('/boards', routerBoards);
app.use('/usuarios', usuario_router_1.default);
//cors
app.get('/', (peticion, respuesta) => {
    respuesta.send('Backend de clovercode');
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
