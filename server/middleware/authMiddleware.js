import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

  if (!token) return res.status(401).json({ message: 'Access token missing' });

  jwt.verify(token, "mySuperSecretKey12345", (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });

    req.user = user; // Add user payload to request
    next();
  });
};
