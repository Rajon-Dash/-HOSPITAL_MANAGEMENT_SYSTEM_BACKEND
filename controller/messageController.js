import { catchAsyncErrors } from "../moddlewares/catchAsyncErrors.js";
import { Message } from "../models/messageSchema.js";
import { ErrorHandler } from "../moddlewares/errorMiddleWare.js";



export const sendMessage = catchAsyncErrors(async (req, res, next) => {
  const { firstName, lastName, email, phone, message } = req.body;
  if (!firstName || !lastName || !email || !phone || !message) {
    return next(new ErrorHandler("Please fill full form", 400));
  }

  await Message.create({ firstName, lastName, email, phone, message });
  res.status(200).json({
    success: true,
    message: "Message send successfully",
  });
});

export const getAllMessage = catchAsyncErrors(async(req,res,next)=>{
  const message = await Message.find();
  res.status(200).json({
    success:true,
    message,
  });
});