const Login = require('../models/Login');

const errorMessages = {
  email: 'Campo de email vazio!',
  user: 'Campo de usuário vazio!',
  password: 'Campo de senha vazio!',
};

module.exports = {
  async store (req, res) {
    const { user, email, password } = req.body;

    const userExists = await Login.findOne({ user });

    if (userExists){
      return res.json({register: false, messages: "Usuário já existe!" });
    }

    if (user.length > 20 || email.length > 45 || password > 20){
      return res.json({register: false, messages: "Tamanho excedido!"})
    }

    try{
      const userData = await Login.create({
        email,
        user: user.toLowerCase(),
        password,
      });
    } catch ({ errors }) {

      const errorsData = Object.values(errors);

      const campos = errorsData.map(erro => erro.path);

      const messages = [];

      if (campos.includes("email")){
        messages.push(errorMessages.email);
      }

      if (campos.includes("user")){
        messages.push(errorMessages.user);
      }

      if (campos.includes("password")){
        messages.push(errorMessages.password);
      }

      return res.json({ register: false, campos });
    }

    return res.json({ register: true });
  },

  async auth (req, res) {
    const { user, password } = req.body;

    const userExists = await Login.findOne({ user: user.toLowerCase() });

    if (!userExists){
      return res.json({ auth: false, message: "Usuário não cadastrado!" });
    }

    const userData = await Login.find({ user: user.toLowerCase() });

    if (userData[0].password == password){
      return res.json({ auth: true, message: "Autenticado com sucesso!" });
    } else {
      return res.json({ auth: false, message: "Senha inválida!" });
    }
  }
}