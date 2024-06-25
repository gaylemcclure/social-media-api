const { User, Thought, Reaction } = require("../models");

const thoughtController = {
  //Get all thoughts
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find({}).populate({ path: "reactions", select: "-__v" }).select("-__v");
      if (!thoughts) {
        return res.status(404).json({ message: "No thought with that ID" });
      }
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //Get single thought by ID
  async getThoughtById(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.id }).populate({ path: "reactions", select: "-__v" }).select("-__v");
      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //Create new thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }
      await User.findOneAndUpdate({ username: thought.username }, { $push: { thoughts: thought._id } });
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //Update thought
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //Delete thought
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.id });
      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }
      await User.findOneAndUpdate({ username: thought.username }, { $pull: { thoughts: req.params.id } });
      res.json({ message: "Successfully deleted the thought" });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //Add reaction
  async addReaction(req, res) {
    try {
      const reaction = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $addToSet: { reactions: req.body } });

      if (!reaction) {
        return res.status(404).json({ message: "No thought with that ID" });
      }
      res.json(reaction);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //Delete reaction
  async deleteReaction(req, res) {
    try {
      const reaction = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $pull: { reactions: { reactionId: req.body.reactionId } } });

      if (!reaction) {
        return res.status(404).json({ message: "No thought with that ID" });
      }
      res.json({ message: "Successfully deleted the reaction" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = thoughtController;
