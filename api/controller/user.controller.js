import User from "../models/user.model.js";

// Function to get the profile of the currently logged-in user
export const getUserProfile = async (req, res, next) => {
  try {
    // Fetch the user using the ID from the JWT token (set by authentication middleware)
    const user = await User.findById(req.user.id);

    if (!user) {
      return next(errorHandler(404, "User not found"));
    }

    // Send the user's profile data
    res.json(user);
  } catch (error) {
    next(error);
  }
};
