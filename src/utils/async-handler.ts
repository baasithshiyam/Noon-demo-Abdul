import { NextApiRequest, NextApiResponse } from "next";

export const asyncHandler = (fn: any) => (req: NextApiRequest, res: NextApiResponse, next: any) => {
  Promise.resolve(fn(req, res, next)).catch((err) => {
    console.log(err);
    next(err);
  });
};
