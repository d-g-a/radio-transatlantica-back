 const { Schema, model } = require('mongoose');


const showSchema = new Schema(
  {
    title: String,
    image: String,
    soundFile: String,
    date: String, 
    location: {
        type: String,
        enum: ["MEX","BCN"]
    },
    guest : {
        type: Schema.Types.ObjectId,
        ref: "Guest"
    },
    genre: [String],
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model('Show', showSchema);