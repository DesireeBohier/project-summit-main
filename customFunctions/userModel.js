const mongoose = require("mongoose");
const { Schema } = mongoose;

export function userModel() {
  const userSchema = new Schema({
    name: String,
    email: String,
    image: String,
    referralId: String,
    numberOfReferrals: Number,
    referrals: [
      {
        nameOfReferral: String,
        thumbnailOfReferral: String,
        referralIdOfReferral: String
      }
    ],
    createdAt: Number,
    updatedAt: Number
  });
    if(mongoose.models && mongoose.models.users){
      console.log("1 Fired");
      return mongoose.models.users;
    } else {
      console.log("2 Fired");
      return mongoose.model("users", userSchema);
    }
}