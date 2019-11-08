import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';
import User from '../models/User';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    const user = await User.findByPk(decoded.id);

    if (user) {
      req.userId = decoded.id;
    } else {
      throw new Error('Token invalid');
    }

    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
