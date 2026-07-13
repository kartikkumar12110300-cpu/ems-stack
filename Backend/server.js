const express = require("express");

const app = express();

const mongoose=require("mongoose");
const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const employeeRoutes = require("./routes/employeeRoutes");

const loggerMiddleware = require("./middleware/loggerMiddleware");

const cors = require("cors");
const port = process.env.PORT || 4500;
const mongoUri = process.env.MONGODB_URI;

// Middleware

app.use(express.json());
app.use(cors());
app.use(loggerMiddleware);


// Routes

app.use("/employees", employeeRoutes);


app.get("/", (req, res) => {

  res.send("Employee Management API Running");

});

if (!mongoUri) {
  throw new Error("MONGODB_URI environment variable is required");
}

mongoose.connect(mongoUri).then(()=>{
  console.log("Connected to MongoDB");
})
.catch((err)=>{
  console.log("err");
  })
app.listen(port, () => {

  console.log("Server Running on Port 4500");

});
