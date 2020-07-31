const usersRouter = require('express').Router();
const users = require('../data/users.json');

usersRouter.get('/users', (req, res) => {
  res.send(users);
});

usersRouter.get('/users/:id', (req, res) => {
  const user = users.find((item) => item._id === req.params.id);
  const error = { message: 'Нет пользователя с таким id' };
  if (!user ? res.status(404).send(error.message) : res.status(200).send(user));
});

module.exports = usersRouter;
