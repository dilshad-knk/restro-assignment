import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const verify = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.cookies?.token;

  if (!token) {
    res.status(403).json({
      success: false,
      message: "Access denied. No token provided.",
    })
    return 
    ;
  }

  jwt.verify(token, process.env.JWT_SECRET as string, (err:any, decoded:any) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized!!",
        error: err.message, 
      });
    }

    (req as any).user = decoded;

    next();
  });
};
