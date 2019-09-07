const Login = require('../models/Login');

module.exports = {
  async store (req, res) {
    const { code, name } = req.body;
    const { user } = req.headers;

    if (code == "" || !code){
      return res.json({ stored: false, message: "Texto vazio!" });
    }

    if (name == "" || !name) {
      return res.json({ stored: false, message: "Nome vazio!" });
    }

    if (name.length > 40){
      return res.json({ stored: false, message: "Tamanho excedido"} )
    }

    const userData = await Login.find({ user });

    userData[0].codes.push({ code, name });

    await userData[0].save();

    return res.json({ stored: true, message: "Adicionado com sucesso!" });
  },

  async index (req, res) {
    const { user } = req.headers;

    const userData = await Login.find({ user });

    return res.json({ codes: userData[0].codes });
  },

  async delete (req, res) {
    const { user } = req.body;
    const { _id } = req.params;


    if (!user || !_id){
      res.json({ delete: false, message: "Falha ao deletar!" });
    }

    const userData = await Login.find({ user });

    const codeData = userData[0].codes.findIndex(x => x._id == _id);

    userData[0].codes.splice(codeData, 1);
    await userData[0].save();

    return res.json({ delete: true, message: "Deletado com sucesso!" });
  },

  async update (req, res) {
    const { _id } = req.params;
    const { code, user, name } = req.body;
  
    if (code == "" || !code){
      return res.json({ updated: false, message: "Texto vazio!" });
    }

    if (name == "" || !name) {
      return res.json({ updated: false, message: "Nome vazio!" });
    }

    const userData = await Login.find({ user });

    const codeData = userData[0].codes.findIndex(x => x._id == _id);

    userData[0].codes[codeData].code = code;
    userData[0].codes[codeData].name = name;

    await userData[0].save();

    return res.json({updated: true, message: "Atualizado com sucesso!"});
  }
}