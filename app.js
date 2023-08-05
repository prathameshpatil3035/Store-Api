const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();
require("express-async-errors");
const notFound = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorHandler");
const productsRouter = require("./routes/products");

//middlewares
app.use(express.json());

//routes
app.use("/api/v1/products", productsRouter);
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
