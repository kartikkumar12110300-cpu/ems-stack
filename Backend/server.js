const express = require("express");

const app = express();

const mongoose=require("mongoose");
const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const employeeRoutes = require("./routes/employeeRoutes");

const loggerMiddleware = require("./middleware/loggerMiddleware");

const cors = require("cors");

// Middleware

app.use(express.json());
app.use(cors());
app.use(loggerMiddleware);


// Routes

app.use("/employees", employeeRoutes);


app.get("/", (req, res) => {

  res.send("Employee Management API Running");

});

mongoose.connect("mongodb+srv://Kartik:Kartik2003@cluster.9qm9pzq.mongodb.net/ems").then(()=>{
  console.log("Connected to MongoDB");
})
.catch((err)=>{
  console.log("err");
  })
app.listen(4500, () => {

  console.log("Server Running on Port 4500");

});