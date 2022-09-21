// file handles User model updates
const { User } = require('../models');

const userController = {
  // the functions will go in here as methods
  // get all users
  getAllUsers(req, res) {
    User.find({})
      .populate({
        path: 'thoughts',
        select: '-__V'
      })
      .select('-__V')
      .sort({_id:1})
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
      console.log(err);
        res.sendStatus(400);
      });
  },
  // get user by id
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .populate({
        path: 'thoughts',
        select: '-__V'
      })
      .select('-__V')
      .sort({_id:1})
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
      console.log(err);
        res.sendStatus(400);
      });
  },
  // create user
  createUser({ body }, res) {
    User.create(body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
  },
  // update user
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No users found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  // delete user
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
  }
};


model.exports = userController;