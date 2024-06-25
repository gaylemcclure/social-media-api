const router = require("express").Router();
const { getAllUsers, getUserById, createUser, updateUser, deleteUser, addFriend, deleteFriend } = require("../../controllers/userController");

//GET all users, POST new user
router.route("/").get(getAllUsers).post(createUser);

//GET user by id, PUT update user by id, DELETE user by id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

//POST new friend, DELETE friend from list
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
