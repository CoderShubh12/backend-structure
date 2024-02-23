import asyncHandler from "../utils/asynchandler.js";

export const registerUser = asyncHandler(async (req, res) => {
  console.log("requested");
  res.status(200).json({
    message: "Ok",
  });
});
