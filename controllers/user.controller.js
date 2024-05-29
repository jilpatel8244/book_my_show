const { createUser, getUsers, deleteUser } = require("../repositories/user.repository");

exports.getAllUsers = async (req, res) => {
    try {
        let allUsers = await getUsers();

        console.log(allUsers);

        res.status(200).json({
            success: true,
            message: allUsers
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "something wrong while getting all user : ", error 
        })
    }
}

exports.insertUser = async (req, res) => {
    try {
        let { first_name, last_name, email, phone_number, gender, state_id, city_id, zipcode, role_id, address } = req.body;
        console.log(req.body);

        let newUser = await createUser({ first_name, last_name, email, phone_number, gender, state_id, city_id, zipcode, role_id, address });

        console.log(newUser);

        res.status(200).json({
            success: true,
            message: newUser 
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "something wrong while inserting user : ", error 
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        let { userId } = req.body;

        let deletedUser = await deleteUser({ userId });

        console.log(deletedUser);

        res.status(200).json({
            success: true,
            message: deletedUser 
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "something wrong while deleting user : ", error 
        })
    }
}