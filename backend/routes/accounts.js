const express = require("express");
const { authMiddleware } = require("../middlewares");
const { Account } = require("../db");
const { default: mongoose } = require("mongoose");
const accountRouter = express.Router();

accountRouter.get("/balance",authMiddleware, async (req, res) => {
    const account = await Account.findOne({userId: req.userId});
    res.json({
        balance : account.balance
    })
})

accountRouter.post("/transfer", authMiddleware, async (req, res) => {
    let amount = Number(req.body.amount);
    const { to } = req.body;

    if (!amount || amount <= 0 || !to) {
        return res.status(400).json({ message: "Invalid input" });
    }

    if (to === req.userId) {
        return res.status(400).json({ message: "Cannot transfer to self" });
    }

    const session = await mongoose.startSession();
    try {
        session.startTransaction();

        const fromAccount = await Account.findOne({ userId: req.userId }).session(session);
        if (!fromAccount || fromAccount.balance < amount) {
            await session.abortTransaction();
            return res.status(400).json({ message: "Insufficient balance" });
        }

        const toAccount = await Account.findOne({ userId: to }).session(session);
        if (!toAccount) {
            await session.abortTransaction();
            return res.status(400).json({ message: "Invalid account" });
        }

        console.log("Updating balances...");
        await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
        await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

        await session.commitTransaction();
        res.json({ message: "Transfer successful" });

    } catch (e) {
        await session.abortTransaction();
        res.status(500).json({ message: "Transaction failed", error: e.message });
    } finally {
        session.endSession();
    }
});


module.exports  = accountRouter;