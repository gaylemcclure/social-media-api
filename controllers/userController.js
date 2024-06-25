const { User, Thought } = require("../models");
const { findOneAndUpdate } = require("../models/User");

const userController = {
  //Get all users
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //Get single user by ID
  async getUserById(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.id }).select("-__v");
      if (!user) {
        return res.status(404).json({ message: "Can't find a user with that ID" });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //Create new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //Update user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { runValidators: true, new: true });
      if (!user) {
        return res.status(404).json({ message: "Can't find a user with that ID" });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //Delete user
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.id });

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }
      //Delete thoughts when user is deleted
      await Thought.deleteMany({ _id: { $in: user.thoughts } });
      //Delete user from friends lists
      await User.updateMany({ friends: req.params.id }, { $pull: { friends: req.params.id }});

      res.json({ message: "User and associated thoughts deleted!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //Add friend
  async addFriend(req, res) {

    try {
      const user = await User.findOneAndUpdate({ _id: req.params.userId }, { $addToSet: { friends: req.params.friendId } }, { new: true, runValidators: true });
      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //Delete friend
  async deleteFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendId } });

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }
      res.json({ message: "Associated friend deleted!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = userController;
