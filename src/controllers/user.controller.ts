import { Request, Response } from "express";
import { UserSchema } from "../models/usuario.schema";
import mongoose, {ObjectId}  from "mongoose";
import { User } from "../models/usuario.model";
const bcrypt = require('bcrypt');



//obtener todos los users
export const obtenerUsers = (req: Request, res: Response) => {
    UserSchema.find()
		.then((result) => {
			res.send(result);
			res.end();
		})
		.catch((error) => {
      res.send(error);
			res.end();
    });
  }
  //contructor para un solo user

  export const obtenerUser = (peticion: Request, respuesta: Response) => {
    UserSchema.findOne({_id: peticion.params.id})
          .then((result:User | null) => {
              respuesta.send(result);
              respuesta.end();
          })
          .catch((error:any) => console.error(error));
  }

  export const obtenerUseremail = (peticion: Request, respuesta: Response) => {
    const userEmail = peticion.params.email; // enviuando email como parametro
    UserSchema.findOne({ email: userEmail })
      .then((result: User | null) => {
        respuesta.send(result);
        respuesta.end();
      })
      .catch((error: any) => {
        console.error(error);
        respuesta.status(500).send('Internal Server Error'); // Send an appropriate error response
      });
  }
  

  export const verificarusuario = async (req: Request, res: Response) => {

    try {
        const { email, password } = req.body;
    
        // Utiliza findOne() para buscar un usuario por correo electrónico
        const usuario = await UserSchema.findOne({ email });
    
        // Si el usuario existe, verifica la contraseña
        if (usuario) {
            if (usuario.contrasena === password) {
                // Si la contraseña es correcta, envía una respuesta positiva
                //res.status(200).json({ mensaje: 'Usuario verificado correctamente' });
                res.send(usuario);
              } else {
                // Si la contraseña no es correcta, envía una respuesta negativa
                res.status(401).json({ mensaje: 'Contraseña incorrecta' });
              }
        } else {
          // Si el usuario no existe, envía una respuesta negativa
          res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
      } catch (error) {
        // Maneja cualquier error que pueda ocurrir durante la verificación
        res.status(500).json({ mensaje: 'Error en el servidor' });
      }
  };



export const agregarusuario = async (req:Request, res:Response) => {
    try {
      const {nombre, email, password } = req.body;
  
      // Verifica si el usuario ya existe
      const usuarioExistente = await UserSchema.findOne({ email });
  
      if (usuarioExistente) {
        return res.status(409).json({ mensaje: 'El usuario ya existe' });
      }
  
      // Si el usuario no existe, hasheamos la contraseña
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Crea un nuevo usuario
      const nuevoUsuario = new UserSchema({
        nombre,
        email,
        contrasena: password,
        imagenPerfil: "assets/profile-pics/naruto.jpg",
        tipocuenta: "gratis",
        proyectos: [],
        // Otros campos que puedas necesitar
      });
  
      // Guarda el nuevo usuario en la base de datos
      await nuevoUsuario.save();
  
      res.status(201).json({ mensaje: 'Usuario creado exitosamente' });
    } catch (error) {
      // Maneja cualquier error que pueda ocurrir durante la creación del usuario
      console.error('Error al agregar usuario:', error);
      res.status(500).json({ mensaje: 'Error en el servidor' });
    }
  };






  export const addProyectoUser = (req: Request, res: Response) => {
    UserSchema.updateOne({_id: req.params.id},
      {
        $push: { 
           proyectos: {
            nombre: req.body.nombre,
            html: req.body.html,
            css: req.body.css,
            js: req.body.js
            } 
        }
      }
    ).then(result => {
      res.send({message: 'Proyecto agregado', result});
      res.end();
    }).catch(error => {
      res.send({message: 'Ocurrio un error', error});
      res.end();
    })
  };

