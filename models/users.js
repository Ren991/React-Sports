const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: [{ type: String, required: true }],
    uniqueString: { type: String, required: true },
    emailVerify: { type: Boolean },
    isAdmin: { type: Boolean },
    image: { type: String },
    country: { type: String },
    city: { type: String },
    adress: { type: String },
    from: { type: Array },
})

const Users = mongoose.model('users', usersSchema)
module.exports = Users
