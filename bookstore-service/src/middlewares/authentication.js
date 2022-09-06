import jwt from 'jsonwebtoken';

import User from '../models/user.js';

const authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.currentUser = await User.findById(decoded.sub);

    next();
  } catch (e) {
    return res.status(401).send({ message: 'Usuário não está autenticado' });
  }
};

export default authentication;
