import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const { token } = req.cookies;
    const token = req.headers.authorization;
    if (!token) throw new Error();
    const payload = jwt.verify(token, "dev_secret") as {userId: string};
    if (!payload) throw new Error();
    req.headers['X-userId'] = payload.userId;
    console.log('[auth middleware]: calling next');
    next();
  } catch (err) {
    req.headers['X-userid'] = '';
    res.status(401).json({ msg: "Authentication failed" });
  }
};
