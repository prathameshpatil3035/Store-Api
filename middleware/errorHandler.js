const { StatusCodes } = require("http-status-codes");
const { customAPIError } = require("../errors/customErrors");

const errorHandlerMiddleware = (error, req, res, next) => {
  if (error instanceof customAPIError) {
    return res.status(error.statusCode).json({ msg: error.message });
  }
  console.log(error);
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ msg: "Something went wrong, please try again later" });
};

module.exports = errorHandlerMiddleware;
