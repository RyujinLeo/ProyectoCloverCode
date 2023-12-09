"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProyectoUser = exports.agregarusuario = exports.verificarusuario = exports.obtenerUseremail = exports.obtneruserlogin = exports.obtenerUser = exports.obtenerUsers = void 0;
const usuario_schema_1 = require("../models/usuario.schema");
const bcrypt = require('bcrypt');
//obtener todos los users
const obtenerUsers = (req, res) => {
    usuario_schema_1.UserSchema.find()
        .then((result) => {
        res.send(result);
        res.end();
    })
        .catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.obtenerUsers = obtenerUsers;
//contructor para un solo user
const obtenerUser = (peticion, respuesta) => {
    usuario_schema_1.UserSchema.findOne({ _id: peticion.params.id })
        .then((result) => {
        respuesta.send(result);
        respuesta.end();
    })
        .catch((error) => console.error(error));
};
exports.obtenerUser = obtenerUser;
const obtneruserlogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        // Utiliza findOne() para buscar un usuario por ID
        const usuario = yield usuario_schema_1.UserSchema.findOne({ _id: userId });
        // Si el usuario existe, envía la información del usuario
        if (usuario) {
            res.status(200).json({ usuario });
        }
        else {
            // Si el usuario no existe, envía una respuesta negativa
            res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
    }
    catch (error) {
        // Maneja cualquier error que pueda ocurrir durante la obtención de la información del usuario
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
});
exports.obtneruserlogin = obtneruserlogin;
const obtenerUseremail = (peticion, respuesta) => {
    const userEmail = peticion.params.email; // enviuando email como parametro
    usuario_schema_1.UserSchema.findOne({ email: userEmail })
        .then((result) => {
        respuesta.send(result);
        respuesta.end();
    })
        .catch((error) => {
        console.error(error);
        respuesta.status(500).send('Internal Server Error'); // Send an appropriate error response
    });
};
exports.obtenerUseremail = obtenerUseremail;
const verificarusuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        // Utiliza findOne() para buscar un usuario por correo electrónico
        const usuario = yield usuario_schema_1.UserSchema.findOne({ email });
        // Si el usuario existe, verifica la contraseña
        if (usuario) {
            if (usuario.contrasena === password) {
                // Si la contraseña es correcta, envía una respuesta positiva
                res.status(200).json({ mensaje: 'Usuario verificado correctamente', usuario });
                //res.send(usuario);
            }
            else {
                // Si la contraseña no es correcta, envía una respuesta negativa
                res.status(401).json({ mensaje: 'Contraseña incorrecta' });
            }
        }
        else {
            // Si el usuario no existe, envía una respuesta negativa
            res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
    }
    catch (error) {
        // Maneja cualquier error que pueda ocurrir durante la verificación
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
});
exports.verificarusuario = verificarusuario;
const agregarusuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, email, password } = req.body;
        // Verifica si el usuario ya existe
        const usuarioExistente = yield usuario_schema_1.UserSchema.findOne({ email });
        if (usuarioExistente) {
            return res.status(409).json({ mensaje: 'El usuario ya existe' });
        }
        // Si el usuario no existe, hasheamos la contraseña
        const hashedPassword = yield bcrypt.hash(password, 10);
        // Crea un nuevo usuario
        const nuevoUsuario = new usuario_schema_1.UserSchema({
            nombre,
            email,
            contrasena: password,
            imagenPerfil: "../profile-pics/naruto.jpg",
            tipocuenta: "gratis",
            proyectos: [],
            // Otros campos que puedas necesitar
        });
        // Guarda el nuevo usuario en la base de datos
        yield nuevoUsuario.save();
        res.status(201).json({ mensaje: 'Usuario creado exitosamente' });
    }
    catch (error) {
        // Maneja cualquier error que pueda ocurrir durante la creación del usuario
        console.error('Error al agregar usuario:', error);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
});
exports.agregarusuario = agregarusuario;
const addProyectoUser = (req, res) => {
    usuario_schema_1.UserSchema.updateOne({ _id: req.params.id }, {
        $push: {
            proyectos: {
                nombre: req.body.nombre,
                html: req.body.html,
                css: req.body.css,
                js: req.body.js
            }
        }
    }).then(result => {
        res.send({ message: 'Proyecto agregado', result });
        res.end();
    }).catch(error => {
        res.send({ message: 'Ocurrio un error', error });
        res.end();
    });
};
exports.addProyectoUser = addProyectoUser;
