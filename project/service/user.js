const userdb = require("../dbservice/user");
const bcrypt = require("bcrypt");
//const sql = require("../db/sql");
const sql = require("mysql");
const tokenService = require("./tokenservice");

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
        return new Promise((resolve, reject) => {
             // Parameter Validation
            if(!username) {
                return reject("Please pass valid user name")
            }
            if(!password) {
                return reject("Please pass valid password")
            }
            // DB Call
            userdb.login(username, password, sql.connection)
            .then(token => {
                console.log('Token : ', token);
                return resolve(token);
            }).catch(err => {
                return reject(err);
            })
        })
       
    } catch (err) {
        console.log("error : ", err);
        throw err;
    }
}

module.exports = {
    signUp: signUp,
    login: login
}
