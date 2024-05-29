const db = require("../models/index");
const { User, Role, State, City } = db;

exports.createUser = async (userPayload) => {
    try {
        let newUser = await User.create(userPayload);
        return newUser;
    } catch (error) {
        console.error('Error while creating user : ', error);
        throw error;
    }
}

exports.getUsers = async () => {
    try {
        let allUsers = await User.findAll(
            {
                attributes: ['id', 'first_name', 'last_name', 'email', 'gender', ],
                include: [
                    {
                        model: Role,
                        attributes: ['id', 'name'],
                    },
                    {
                        model: State,
                        attributes: ['id', 'name'],
                    },
                    {
                        model: City,
                        attributes: ['id', 'name'],
                    }
                ]
            }
        );
        return allUsers;
    } catch (error) {
        console.error('Error while fetchng all users : ', error);
        throw error;
    }
}

exports.deleteUser = async ({userId}) => {
    try {
        let deletedUser = await User.destroy({
            where: {
                id: userId
            }
        });

        return deletedUser;
    } catch (error) {
        console.error('Error while delete user : ', error);
        throw error;
    }
}