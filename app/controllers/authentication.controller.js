import bcryptjs from "bcryptjs"


const usuarios = [{
    user: "a",
    email: "a@a.com",
    password: "a"
}]

async function login(req,res){

}

async function register(req,res){
    const user = req.body.user;
    const password = req.body.password;
    const email = req.body.email; 
    if(!user || !password || !email){
       return res.status(400).send({status:"Error",message:"Loscampos estan incompletos"})
    }
    const usuarioARevisar = usuarios.find(usuario =>usuario.user === user);
    if(usuarioARevisar){
       return res.status(400).send({status:"Error",message:"Esteusuario ya existe"})

    }
    const salt = await bcryptjs.genSalt(5);
    const hashPassword = bcryptjs.hash(password,salt);
    const nuevoUsuario = {
        user, email, password : hashPassword
    }
    
    usuarios.push(nuevoUsuario);
    return res.status(201).send({status:"ok",message:"Usuario ${nuevoUsuario.User} agregado",redirect:"/"}) 
}

export const methods = {
    login,
    register
}