const connection = require('../database/connection');
const bcryptjs = require('bcryptjs');

module.exports = {
  async store(req, res) {
    const { name, email, username, password } = req.body;

    const password_hash = await (bcryptjs.hash(password, 8));

    const [id] = await connection('users').insert({
      name,
      email,
      username,
      password: password_hash
    });

    return res.json({id});
  },

  async show(req, res) {
    const userId = '2';
    try {
      const user = await connection('users')
        .select(['name', 'email', 'username', 'created_at'])
        .where('id', userId);

      if (!user) return res.status(401).json({message: 'User does not exist'});

      return res.json(user);
    } catch (error) {
      return res.status(401).json({error: 'Error'});
    }
  }
}