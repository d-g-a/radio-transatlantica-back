const { Schema, model } = require('mongoose');

const guestSchema = new Schema(
  {
    name: String,
    image: String,
    bio: String,
    shows: [{
        type: Schema.Types.ObjectId,
        ref: "Show"
    }]
  },
  {
    timestamps: true,
    versionKey: false
  }
);


module.exports = model('Guest', guestSchema);
