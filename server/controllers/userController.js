import User from '../models/User.js';

// Get User Profile
export const getUserProfile = async (req, res) => {
    try {
        // req.user is set by the auth middleware (which we need to add/update)
        const user = await User.findById(req.user.id).select('-password -otp');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        console.error('Error fetching profile:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Update User Profile
// Update User Profile
export const updateUserProfile = async (req, res) => {
    try {
        console.log('Update Profile Request Body:', {
            ...req.body,
            avatar: req.body.avatar ? '(base64 string present)' : '(no avatar)'
        });

        const { name, phoneNumber, avatar } = req.body;

        // Find user by ID
        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update fields if provided (checking for undefined to allow empty strings if intended)
        if (name !== undefined) user.name = name;
        if (phoneNumber !== undefined) user.phoneNumber = phoneNumber;
        if (avatar !== undefined) user.avatar = avatar;

        const updatedUser = await user.save();
        console.log('User Profile Updated:', updatedUser._id);

        res.json({
            _id: updatedUser._id,
            email: updatedUser.email,
            name: updatedUser.name,
            avatar: updatedUser.avatar,
            phoneNumber: updatedUser.phoneNumber,
        });
    } catch (error) {
        console.error('Error updating profile:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
