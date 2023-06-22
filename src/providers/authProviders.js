const jwt = require('jsonwebtoken');

// Generar token
const generateToken = (userId) => {
  const token = jwt.sign({ userId }, 'secretKey', { expiresIn: '1h' });
  return token;
};

// Verificar token
const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, 'secretKey');
    return decoded.userId;
  } catch (error) {
    throw new Error('Token inválido');
  }
};

module.exports = {
  generateToken,
  verifyToken,
};