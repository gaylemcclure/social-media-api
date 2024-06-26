const { Schema, model, Types } = require('mongoose');
const dayjs = require('dayjs')

const reactionSchema = new Schema({
    reactionId: {
        type: Types.ObjectId,
        default: new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: dayjs(),
        get: (createdAtVal) => dayjs(createdAtVal).format('DD MMM YYYY [at] hh:mm a')
      }
},
{
    toJSON: {
        getters: true
    },
    id: false
});

module.exports = reactionSchema;