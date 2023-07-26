import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import * as postController from "@/backend/module/post/post-controller";
const router = createRouter();

router.put(postController.update);

export default router.handler({
  onError: (_err, _req: NextApiRequest | any, res: NextApiResponse | any) => {
    res.status(500).end("Something went wrong");
  },
});
