import cryptoPassword from '../../lib/crypto.password.js';
import User from '../../models/user.js';

const register = async (req, res) => {
  const userWithEmail = await User.findOne({ email: req.body.email });

  if (userWithEmail) {
    return res
      .status(400)
      .send({ message: 'Este email já está sendo utilizado' });
  }

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: cryptoPassword(req.body.password),
  });

  await user.save();

  res.json({ user: { ...user.toObject(), password: undefined } });
};

export default register;
