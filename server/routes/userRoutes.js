const express = require('express');
const { authenticateToken } = require('../middleware/authMiddleware');
const { getProfile } = require('../controller/userController');

const router = express.Router();

router.get('/profile', authenticateToken, getProfile);

module.exports = router;