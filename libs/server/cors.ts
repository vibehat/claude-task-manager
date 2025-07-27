import type { NextApiRequest, NextApiResponse } from 'next';

export async function applyCors(req: NextApiRequest, res: NextApiResponse) {
   if (process.env.NODE_ENV === 'development') {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      res.setHeader('Access-Control-Max-Age', '86400');

      // Handle preflight request
      if (req.method === 'OPTIONS') {
         res.status(200).end();
         return true;
      }
   }
   return false;
}
