import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  newsOutlet: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    // unique: true
  }
});

export const UserModel = mongoose.model("users", UserSchema);