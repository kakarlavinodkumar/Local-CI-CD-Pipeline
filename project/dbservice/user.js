const bcrypt = require("bcrypt");
const tokenService = require("../service/tokenservice");

async function signUp(username, password, con) {
    try {
        const query = `USE ci_cd` 
        const query2 = `INSERT INTO user VALUES ('${username}', '${password}')`
        con.query(query, function (err, result) {
            if (err) throw err;
            con.query(query2, function (err1, result1) {
                if (err1) throw err1;
                console.log("1 record inserted");
            });
        });

        
    } catch (err) {
        throw err;
    }
}

async function login(username, password, con) {
    try {
        return new Promise((resolve, reject) => {
            const query = `USE ci_cd` 
            const query2 = `SELECT * FROM user WHERE name = '${username}'`
            console.log("Inside the login DB service");
            con.query(query, function (err1, result1) {
                if(err1) {
                    return reject(err1);
                }
                
                console.log(" first query executed");
                
                con.query(query2, function(err, result, fields) {
                    console.log("matched record : ", result[0]); 
                    if(!result) {
                        return reject("User not found")
                    }
                    const matched = bcrypt.compare(password, result[0].password);
                    if(matched) {
                        const payload = {
                            name : username,
                            password: password
                        }
                        tokenService.generateToken(payload)
                        .then(data => {
                            console.log("token : ", data);
                            return resolve(data);
                        }).catch(err => {
                            console.log("error : ", err);
                            return reject(err);
                        })
                    } else {
                        throw ("The password is invalid");
                    }
                });
    
            });

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