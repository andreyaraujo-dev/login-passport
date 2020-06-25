const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const userId = req.user.id;
    try {
      const [user] = await connection('users')
        .select(['name', 'email', 'username', 'created_at'])
        .where('id', userId);

      if (!user) return res.status(401).json({message: 'User does not exist'});

      const dateNow = new Date(user.created_at);
      const date = {};
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      date.day = days[dateNow.getDay()];
      date.dayNumber = dateNow.getDate();
      date.month = months[dateNow.getMonth()];
      date.year = dateNow.getFullYear();

      return res.render('perfil', { user, date });
    } catch (error) {
      return res.status(401).json({error: 'Error'});
    }
  },
}