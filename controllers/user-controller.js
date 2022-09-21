// file handles User model updates
const { User } = require('../models');

const userController = {
    // the functions will go in here as methods
    // get all users
    getAllUser(req, res) {
        User.find({})
          .populate({
            path:
          })

    }
};

model.exports = userController;