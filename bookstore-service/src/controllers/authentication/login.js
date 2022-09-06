import cryptoPassword from '../../lib/crypto.password.js';
import generateTokens from '../../lib/generate.tokens.js';
import User from '../../models/user.js';

const login = async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: cryptoPassword(req.body.password),
  });

  if (!user) {
    return res.status(401).send({ message: 'Email ou senha são inválidos' });
  }

  res.json(generateTokens(user.id));
};

export default login;
