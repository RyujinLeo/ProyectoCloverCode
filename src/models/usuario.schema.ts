import mongoose  from "mongoose";
import { Proyecto } from "./proyecto.model";
import { User } from "./usuario.model";


const schema = new mongoose.Schema<User>({
    nombre: String,
    email: String,
    contrasena: String,
    imagenPerfil: String,
    tipocuenta: String,
    proyectos: Array<Proyecto>,
    });
    
   
    export const UserSchema = mongoose.model('usuarios',schema);