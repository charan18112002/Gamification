const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jsonwebtoken')
const User = require('../models/User');


// Creating A New User 
router.post('/signup', async (req, res) => {
    const { fullName, email, password, confirmPassword } = req.body;

    //Validating the user
    if (!fullName || !email || !password || !confirmPassword) {
        return res.status(400).json({ message: "All Fields Required" });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    try {
        //Check if user exists or not
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: "Email Already Registered" });
        }

        //Otherwise create a new user
        const hashedPassword = await bcrypt.hash(password, 10);

        //Create User
        const newUser = await User.create({
            fullName,
            email,
            password: hashedPassword,
            quizzesComplete: 0,
            totalScore: 0
        });

        res.status(201).json({ message: 'User Created Successfully', userId: newUser.id });
    }

    catch (err) {
        //Returning any error if its there
        console.error(err);
        res.status(500).json({ message: 'Server error in creating a new user. Check auth.js signup' });
    }

});

// Logging A User
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Find user by email
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // 2. Compare password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // 3. Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, fullName: user.fullName },
      'mySuperSecretKey12345',
      { expiresIn: '7d' }
    );

    // 4. Return success with token and user info
    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        score: user.score,
        quizzesCompleted: user.quizzesCompleted,
      },
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});





module.exports = router;