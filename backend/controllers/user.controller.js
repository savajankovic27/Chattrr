import User from "../models/user.model.js";

 export const getUsersForSidebar = async (req, res) =>{
    try {

        const loggedInUserId = req.user._id;

        // fetching all the users from the database

        // find every user in the database apart from the user that is NOT logged in 
        const  filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password");

        res.status(200).json(filteredUsers); // return response for all details on the user excluding the password, obviuosly

    } catch (error){
        console.error("Error in getUsersForSidebar: ", error.message)
        res.status(500).json({error: "Internal server error"});
    }
 }

 // made so there is no mix with the authentication controller, will be used with message controller


 export default getUsersForSidebar;

