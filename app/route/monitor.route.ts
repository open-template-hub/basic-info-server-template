/**
 * @description holds monitor routes
 */

import Router from 'express-promise-router';
import { Request, Response } from 'express';
import { ResponseCode } from '../constant';

const subRoutes = {
  root: '/',
  alive: '/alive',
};

export const publicRoutes = [subRoutes.alive];

export const router = Router();

router.get(subRoutes.alive, async (req: Request, res: Response) => {
  // checks status is alive
  res.status(ResponseCode.OK).send();
});