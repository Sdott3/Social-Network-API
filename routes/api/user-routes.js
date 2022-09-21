const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createNewUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend

} = require('../../controllers/user-controller');

// Set up GET all POST at /api/user
router
 .route('/')
 .get(getAllUsers)
 .post(createNewUser);

// Set up GET one, PUT, and DELETE at /api/user/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// Set up ADD and DELETE friend??
router
 .route('/:userid/friends/:friendId')
 .post(addFriend)
 .delete(deleteFriend);

module.exports = router;