import express from 'express';
import { getUserProfile, updateUserProfile } from '../controllers/userController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// @route   GET api/user/profile
// @desc    Get current user profile
// @access  Private
router.get('/profile', auth, getUserProfile);

// @route   PUT api/user/profile
// @desc    Update user profile
// @access  Private
router.put('/profile', auth, updateUserProfile);

export default router;
