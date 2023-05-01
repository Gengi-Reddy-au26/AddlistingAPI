const userModel = require("../model/userModel")


const getUser = async (req, res) => {
    try {
        const user = await userModel.find();
        res.send({status : 'success', user})
    } catch(err) {
        res.status(500).send({status : 'error', msg : 'error connected to DB'});
    }
}

const postUser = async(req, res) => {
    const postResult = req.body;

    try {
        const postData = await userModel.create(postResult);
        res.send({status : 'success', postData});
    } catch(err) {
        console.log(err)
        res.status(500).send({status : 'error', msg : 'error connected to DB'})
    }
}

module.exports = {
    getUser, 
    postUser
}