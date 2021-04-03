// import mongoose from "mongoose";
// import { userModel } from "../../customFunctions/userModel";
// import keys from "../../config/keys";

// const User = userModel();
// mongoose.connect(process.env.DATABASE_URL);

export default async function handler(req, res) {
  //Send the data for the WooCommerce user that just purchased here
  console.log("reqest", req.body);
  res.send({ status: "ok" });
  //   if (existingUser) {
  //   }

  //   if (!existingUser) {
  //     const user = await new User({
  //       email: req.body.email,
  //       referralId: shortIdVariable,
  //       numberOfReferrals: 0,
  //     }).save();
  //   }
  //   res.writeHead(301, {
  //     Location: "/waitlist",
  //   });
  //   res.end();
}
