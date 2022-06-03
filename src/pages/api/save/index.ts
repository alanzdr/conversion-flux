import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import cors from 'cors';

import responseController from 'controllers/Response';

const router = nextConnect<NextApiRequest, NextApiResponse>({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method Not Allowed` });
  },
});

const contoller = responseController();

router.use(cors());

router.post(contoller.store);

export default router;
