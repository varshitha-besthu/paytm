const express = require("express");

const userRouter = express.Router();
const zod = require("zod");
const { User, Account } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middlewares");

const signupBody = zod.object({
    username: zod.string().email(),
	firstName: zod.string(),
	lastName: zod.string(),
	password: zod.string()
})
userRouter.post("/signup", async(req, res) => {
     const { success } = signupBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }
    const existingUser = await User.findOne({
        username: req.body.username
    })
    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })
    const userId = user._id;

    const account  = await Account.create({
        userId, balance : 1 + Math.random() * 10000
    })
    

    res.json({
        token: token,
        message: "User created successfully",
        account : account
    })
    

})

userRouter.post("/signin",async (req, res) => {
    const body = req.body;

    const existingUser = await User.findOne({
        username: body.username
    })
    if(!existingUser){
        res.status(411).json({
            message : "User doesn't exists"
        })
        return;
    }
    if(existingUser.password != body.password){
        res.status(411).json({
            message : "Password is wrong"
        })
        return;
    }
    const userId = existingUser._id;

    const token = jwt.sign({userId : userId}, JWT_SECRET);
    res.cookie("token", token, {sameSite: 'none', secure : true});
    res.status(200).json({
        token : token
    })
})

const updatedBody = zod.object({
    password : zod.string().min(6).optional(),
    firstName : zod.string().optional(),
    lastName : zod.string().optional()
})

userRouter.put("/",authMiddleware, async (req, res) => {
    const body = updatedBody.safeParse(req.body);
    if(!body.success){
        res.status(411).json({message : "update is not possible"})
    }

    const user = await User.findOneAndUpdate({_id : req.userId}, req.body);
    res.status(200).json({
        message : "Updated Successfully",
        newUser : user
    })

})

userRouter.get("/info", authMiddleware, async(req, res) => {
    const  user = await User.findOne({_id: req.userId});
    res.json({
        user : user
    })
})

userRouter.get("/bulk", authMiddleware, async(req, res) => {
    const name = req.query.filter || "";
    const users = await User.find({
        $or:[
            {'firstName' : {"$regex" : name}},
            {"lastName" : {"$regex" : name}}
        ]
    })
     res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

module.exports = userRouter