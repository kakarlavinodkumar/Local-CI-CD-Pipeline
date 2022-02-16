const userdb = require("../dbservice/user");
const bcrypt = require("bcrypt");
const sql = require("../db/sql");

async function signUp(username, password) {
    try {
        // Parameter Validation
        if(!username) {
            throw "Please pass valid user name"
        }
        if(!password) {
            throw "Please pass valid password"
        }
        // hash the password
        const hash_password = await bcrypt.hash(password, 10)
        await userdb.signUp(username, hash_password, sql.connection);
        return {
            message: "User signup done successfully!"
        }
    } catch (err) {
        throw err;
    }
}

async function login(username, password) {
    try {
        // Parameter Validation
        if(!username) {
            throw "Please pass valid user name"
        }
        if(!password) {
            throw "Please pass valid password"
        }
        // DB Call
        const result =await userdb.login(username, password, sql.connection);
        console.log('Result : ', result);
        return {
            message : "authentication successful"
        }
        // const matched = bcrypt.compare(password, user[0].password);
        // if(matched) {
        //     return {
        //         message: "authentication successful"
        //     }
        // }
        // return {
        //     message: "Invalid password"
        // }
    } catch (err) {
        console.log("error : ", err);
        throw err;
    }
}

module.exports = {
    signUp: signUp,
    login: login
}
