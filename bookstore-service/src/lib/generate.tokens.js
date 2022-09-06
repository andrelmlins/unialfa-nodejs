import jwt from 'jsonwebtoken';

const generateTokens = (userId) => {
  const accessToken = jwt.sign({}, process.env.JWT_SECRET, {
    expiresIn: 86400,
    subject: userId,
  });

  const refreshToken = jwt.sign({}, process.env.JWT_SECRET_REFRESH, {
    expiresIn: 86400 * 5,
    subject: userId,
  });

  return { accessToken, refreshToken };
};

export default generateTokens;
