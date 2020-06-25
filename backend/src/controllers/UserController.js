const connection = require('../database/connection');
const bcryptjs = require('bcryptjs');

module.exports = {
  index(req, res) {
    return res.render('register');
  },

  async store(req, res) {
    const { name, email, username, password } = req.body;

    const salt = await bcryptjs.genSalt(8);
    const password_hash = await bcryptjs.hash(password, salt);

    await connection('users').insert({
      name,
      email,
      username,
      password: password_hash
    });

    return res.redirect('/');
  },

  async show(req, res) {
    const idUser = req.user.id;
    try {
      const user = await connection('users')
        .select(['name', 'email', 'username', 'created_at'])
        .where('id', idUser);

      if (!user) return res.status(401).json({message: 'User does not exist'});

      return res.render('perfil', { user });
    } catch (error) {
      return res.status(401).json({error: 'Error'});
    }
  }
}