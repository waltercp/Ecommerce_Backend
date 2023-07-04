const User = require("../../models/User")

const user = async()=>{

    const userCreate = {
        firstName: "Walter",
        lastName: "Camacho",
        email: "walter_cp_96@hotmail.com",
        password: "7916161",
        phone: "936495254"
    }

    await User.create(userCreate)

}
module.exports = user