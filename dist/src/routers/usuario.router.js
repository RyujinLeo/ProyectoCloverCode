"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
let router = express_1.default.Router();
router.get('/', user_controller_1.obtenerUsers);
router.get('/busqueda/:email', user_controller_1.obtenerUseremail);
router.post('/login', user_controller_1.verificarusuario);
router.post('/registrar', user_controller_1.agregarusuario);
//router.get('/:id', obtenerUser);
router.get('/:userId', user_controller_1.obtneruserlogin);
router.put('/:id/proyecto', user_controller_1.addProyectoUser);
exports.default = router;
