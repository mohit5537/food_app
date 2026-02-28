require("dotenv").config();
const express = require("express");
// const numCPUs = require("node:os").availableParallelism();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const app = express();
const path = require("path");
const cors = require("cors");

const vendorRoutes = require("./routes/vendorRoutes");
const firmRoutes = require("./routes/firmRoutes");
const productRoutes = require("./routes/productRoutes");
app.use(bodyparser.json()); //Instead of this we can also use express.json() as a middle ware
app.use(cors());

mongoose
  .connect(process.env.MONGO_CONN)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("server and db connected");

      app.use("/vendor", vendorRoutes);
      app.use("/firm", firmRoutes);
      app.use("/products", productRoutes);
      app.use("/uploads", express.static("uploads"));
    });
  })
  .catch((err) => {
    console.log(err, "Something went wrong");
  });

app.use("/", (req, res) => {
  res.send("<h3>Welcome to food app</h3>");
});
