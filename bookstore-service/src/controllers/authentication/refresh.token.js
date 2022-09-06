import jwt from 'jsonwebtoken';

import generateTokens from '../../lib/generate.tokens.js';

const refreshToken = async (req, res) => {
  try {
    const decodedRefreshToken = jwt.verify(
      req.body.refreshToken,
      process.env.JWT_SECRET_REFRESH
    );

    if (decodedRefreshToken.sub != req.currentUser.id) {
      return res
        .status(400)
        .send({ message: 'Token de atualização é inválido' });
    }

    res.json(generateTokens(decodedRefreshToken.sub));
  } catch (e) {
    res.status(400).send({ message: 'Token de atualização é inválido' });
  }
};

export default refreshToken;
