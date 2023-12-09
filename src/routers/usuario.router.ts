import express from 'express';
import { obtenerUser,obtenerUsers,addProyectoUser,obtenerUseremail,verificarusuario, agregarusuario, } from '../controllers/user.controller';


let router = express.Router(); 

router.get('/', obtenerUsers);
router.get('/busqueda/:email', obtenerUseremail);
router.post('/login', verificarusuario);
router.post('/registrar', agregarusuario);
router.get('/:id', obtenerUser);
router.put('/:id/proyecto', addProyectoUser);


export default router; 