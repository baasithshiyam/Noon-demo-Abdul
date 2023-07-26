import { NextApiRequest, NextApiResponse } from "next";
import { asyncHandler } from "@/utils/async-handler";
import * as postService from "./post-service";

export const get: any = asyncHandler(async (req: NextApiRequest, res: NextApiResponse) => {
  const { type } = req.query;
  const posts = await postService.get(type as string);
  return res.status(200).json(posts);
});

export const update: any = asyncHandler(async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, favorite } = req.query;
  const posts = await postService.update(id as string, favorite === "true");
  return res.status(200).json(posts);
});
