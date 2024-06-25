const router = require("express").Router();
const { getAllThoughts, getThoughtById, createThought, updateThought, deleteThought, addReaction, deleteReaction } = require("../../controllers/thoughtController");

//GET all thoughts, POST new thought
router.route("/").get(getAllThoughts).post(createThought);

//GET thought by id, PUT update thought, DELETE thoughts
router.route("/:id").get(getThoughtById).put(updateThought).delete(deleteThought);

//POST new reaction, DELETE reaction
router.route("/:thoughtId/reactions/").post(addReaction).delete(deleteReaction);


module.exports = router;
