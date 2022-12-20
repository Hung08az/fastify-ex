const { user } = require('../models/user');
const bcrypt = require('bcrypt');


const getAllUser = async (req, res) => {
    const allData = await user.findAll();
    console.log(allData);
    res.send(allData);
}
const getDataUserById = async (req, res) => {
    const { id } = req.params;
    const allData = await user.findAll(
        {
            where: {
                id: id
            }
        }
    );
    console.log(allData);
    res.send(allData);
}
const addNewUser = async (req, res) => {
    const { name, username, password, email, phone, zipcode, city, role } = req.body;
    const salt = await bcrypt.genSalt(11);
    const hashPassword = await bcrypt.hash(password, salt);
    const saveUser = user.build({
        name: name,
        username: username,
        password: hashPassword,
        email: email,
        phone: phone,
        zipcode: zipcode,
        city: city,
        role: role
    });
    result = await saveUser.save();
    res.send(result);
}
const updateUserById = async (req, res) => {
    const { name, username, password, email, phone, zipcode, city, role } = req.body;
    const { id } = req.params;
    const salt = await bcrypt.genSalt(11);
    const hashPassword = await bcrypt.hash(password, salt);
    await user.update({
        name: name,
        username: username,
        password: hashPassword,
        email: email,
        phone: phone,
        zipcode: zipcode,
        city: city,
        role: role
    }, {
        where: {
            id: id
        }
    })
        .then((result) => res.send(result)
        )
        .catch((err) => console.log(err))
}
const deleteUser = async (req, res) => {
    const { id } = req.params;
    const result = await user.destroy({
        where: {
            id: id
        }
    });
    res.send(result)
}
const login = async (req, res) => {
    const { email, password } = req.body;
    const result = await user.findOne({
        where: { email }
    })
    if (result === null) {
        res.send({ status: 404 })
    }
    else {
        const compare = await bcrypt.compare(password, result.password);
        if (compare) {
            res.send(result);
        }
        else {
            res.send({ status: 404 })
        }
    }
}
module.exports = {
    getAllUser: getAllUser,
    getDataUserById: getDataUserById,
    addNewUser: addNewUser,
    updateUserById: updateUserById,
    deleteUser: deleteUser,
    login: login,
};
