import User from "../models/UserModel.js";

export const getUser = async(req, res) => {
    try {
        const user = await User.findAll();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
}
export const getUserById = async(req, res) => {
    try {
        const user = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
}
export const storeUser = async(req, res) => {
    try {
        await User.create(req.body);
        res.status(201).json({msg: "User created successfully"});
    } catch (err) {
        res.status(500).json(err);
    }
}
export const updateUser = async(req, res) => {
    try {
        await User.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User updated successfully"});
    } catch (err) {
        res.status(500).json(err);
    }
}
export const destroyUser = async(req, res) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User deleted successfully"});
    } catch (err) {
        res.status(500).json(err);
    }
}