import crypto from 'crypto';

const cryptoPassword = (password) => {
  return crypto
    .createHmac('sha256', process.env.PASSWORD_SECRET)
    .update(password)
    .digest('hex');
};

export default cryptoPassword;
