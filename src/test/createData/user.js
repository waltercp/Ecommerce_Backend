const User = require("../../models/User")

const user = async()=>{

    const userCreate = {
        firstName: "Agustin",
        lastName: "Seoane",
        email: "agustin@gmail.com",
        password: "agustin1234",
        phone: "+12345"
    }

    await User.create(userCreate)

}
module.exports = user