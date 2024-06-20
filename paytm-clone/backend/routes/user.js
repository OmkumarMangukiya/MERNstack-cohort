const express = require("express");
const z = require("zod");
const {User , Account} = require("../db");
const jwt= require("jsonwebtoken");
const { authMiddleware } = require("../middleware");
const { JWT_SECRET } = require("../config");
const router = express.Router();
const signupZodSchema = z.object({
    username: z.string().email(),
  password: z.string().min(6),
  firstName: z.string().min(3).max(20),
  lastName: z.string().min(3).max(20),
})

router.post("/signup" , async (req,res)=>{
    const {username , password , firstName , lastName} = signupZodSchema.safeParse(req.body);
    const newUser = new User({username , password , firstName , lastName});
    await newUser.save();
    const newAccount = new Account({userId:newUser._id , balance:10000});
    await newAccount.save();
    const token = jwt.sign({userId:newUser._id} , JWT_SECRET);
    res.json({message:"User Created" , token});
})

const signinZOdSchema =  z.object({
    username : z.string().email(),
    password : z.string().min(6),
})
router.post("/signin",async(req,res)=>{
    const{username , password} = signinZOdSchema.safeParse(req.body);
    const existingUser = await User.findOne({username,password});
    if(existingUser){
        const token = jwt.sign({userId:existingUser._id},JWT_SECRET);
        res.json({message:"User Signed In" , token})
    }
    res.send({message:"Invalid username or password"});
})

// update

const updateProfileZodSchema =  z.object({
    password: z.string().min(6),
    firstName: z.string().min(3).max(20),
    lastName: z.string().min(3).max(20),
})

router.put("/",authMiddleware,async (req,res)=>{
    const {success} = updateProfileZodSchema.safeParse(req.body);
    if(!success){
        res.json({
            msg:"Invalid Data"
        })
    }
    const updateBody = await User.updateOne({_id:req.userId},req.body);
    res.json({msg:"Profile Updated" + updateBody})
})

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

       
  module.exports = router;