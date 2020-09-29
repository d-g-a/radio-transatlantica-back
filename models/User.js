const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    name: String,
    pic: String,
    email: String,
    password: String,
    showsLoved: {
        type: Schema.Types.ObjectId,
        ref: "Show"
    },
    editorialsLoved: {
        type: Schema.Types.ObjectId,
        ref: "Editorial"
    },
    facebookId: String,
    googleId: String,
    role: {
        type: String,
        enum: ["ADMIN","VISITOR"],
        default: "VISITOR",
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: 'email' });

module.exports = model('User', userSchema);
