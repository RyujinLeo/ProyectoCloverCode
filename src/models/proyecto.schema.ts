import mongoose  from "mongoose";
import { Proyecto } from "./proyecto.model";


const schema = new mongoose.Schema<Proyecto>({
    nombre: String,
    html: Array<String>,
    css: Array<String>,
    js: Array<String>,
   });
   export const ProyectoSchema = mongoose.model('proyectos',schema);