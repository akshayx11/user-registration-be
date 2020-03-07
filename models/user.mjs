import mongoose from "mongoose";
const {
  ObjectId
} = mongoose.Types;

const dataModifierSchema = {
  _id: ObjectId,
  name: String
}
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    lowercase: true
  },
  password: Object,
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
  create(user) {
    user.status = "active";
    user.createdAt = Date.now();
    const newUser = new this.User(user);
    return newUser.save();
  }
  async getAllUsers() {
    return this.User.find({
      status: {
        $ne: "archived"
      }
    });
  }
  async getUserById(userId) {
    return this.User.findOne({
      _id: new ObjectId(userId),
      status: {
        $ne: "archived"
      }
    });
  }
  async updateUser(userId, userData) {
    userData.updatedAt = Date.now();
    return this.User.updateOne({
      _id: new ObjectId(userId)
    }, userData);
  }
}

export default User;