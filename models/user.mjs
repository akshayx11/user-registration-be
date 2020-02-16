import mongoose from "mongoose";
const {
  ObjectId
} = mongoose.Types;

const dataModifierSchema = {
  _id: ObjectId,
  name: String
}
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    lowercase: true
  },
  password: String,
  title: String,
  firstName: String,
  middleName: String,
  lastName: String,
  gender: String,
  dateOfBirth: Number,
  mobileNumber: Number,
  email: String,
  city: String,
  state: String,
  country: String,
  facebookId: String,
  googleId: String,
  status: String,
  createdAt: Number,
  updatedAt: Number,
  createdBy: dataModifierSchema,
  updatedBy: dataModifierSchema
}, {
  strict: false
});

class User {
  constructor() {
    this.User = mongoose.model("User", userSchema, "Users");
  }
  static create(user) {
    user.status = "active";
    user.createdAt = Date.now();
    const newUser = new this.User(user);
    return newUser.save();
  }
  async getAllUsers() {
    return await this.User.find();
  }
}

export default User;