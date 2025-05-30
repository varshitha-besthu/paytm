const express = require("express");
const mainRouter = require("./routes/index");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser())
app.use(cors({
  origin : "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());

app.use("/api/v1", mainRouter);

async function main() {
    app.listen(3000)
    await mongoose.connect("mongodb+srv://admin:M8Ka9GxEjWaNb9kl@cluster0.lphgo.mongodb.net/paytm");
    console.log("user is connected to db")
}

main()