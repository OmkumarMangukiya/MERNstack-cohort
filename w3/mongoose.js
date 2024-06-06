const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";
mongoose.connect(
  "mongodb+srv://Om1:Omkumar%40706@cluster0.3x2qimu.mongodb.net/"
);
const app = express();
app.use(express.json());
const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
});
app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  const existingUser = await User.findOne({ email: username });
  var token = jwt.sign({ username: username }, jwtPassword);
  if (existingUser) {
    return res.json({
      msg: "User already exists",
      token,
    });
  }

  const user = new User({
    name: name,
    email: username,
    password: password,
  });

  user.save();
  res.json({
    msg: "User created",
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username from the database
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});
app.listen(3000);
