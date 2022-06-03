import { NextApiRequest } from 'next';

export const getRequestIp = (request: NextApiRequest) : string => {
  if (process.env.NODE_ENV === 'development') {
    return '179.191.236.36';
  }
  const userIp = (request.headers['x-forwarded-for'] ||
    request.connection.remoteAddress) as string;
  if (!userIp) {
    return '';
  }
  return userIp.split(',')[0];
};
