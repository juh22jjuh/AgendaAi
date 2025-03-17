import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
    confirmPass: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
})

export const User = mongoose.model('User', userSchema)