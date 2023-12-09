import mongoose  from "mongoose";
import { Proyecto } from "./proyecto.model";

export interface User {
    _id?: mongoose.Types.ObjectId,
    nombre: string,
    email: string,
    contrasena: string,
    imagenPerfil: string,
    tipocuenta: string, //string[]
    proyectos: Array<Proyecto>,
  };

  


