const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { users, getRandomThought, getRandomReaction, getMultipleReactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
      await connection.dropCollection('users');
    }

    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
      await connection.dropCollection('thoughts');
    }
  // Create empty array to hold the students
  const thoughts = [];

  // Loop 20 times -- add students to the students array
  for (let i = 0; i < 20; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const reactionArr = getMultipleReactions(Math.floor(Math.random() * 4));

    const thoughtText = getRandomThought();
    const username = users[i].username;

    thoughts.push({
      thoughtText,
      username,
      reactionArr,
    });
  }

  // Add students to the collection and await the results
  const thoughtData = await Thought.create(thoughts);

//   // Add courses to the collection and await the results
//   await Course.create({
//     courseName: 'UCLA',
//     inPerson: false,
//     students: [...studentData.map(({_id}) => _id)],
//   });

  // Log out the seed data to indicate what should appear in the database
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
