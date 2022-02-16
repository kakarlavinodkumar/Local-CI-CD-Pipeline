const bcrypt = require("bcrypt");

async function signUp(username, password, con) {
    try {
        const query = `USE sql3469084` 
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
        const query = `USE sql3469084` 
        const query2 = `SELECT * FROM user WHERE name = '${username}'`
        console.log("Inside the login DB service");
        await con.query(query);
        console.log(" first query executed");
        con.query(query2, function(err, result, fields) {
            console.log("matched record : ", result[0]); 
            if(!result) {
                throw ("User not found")
            }
            const matched = bcrypt.compare(password, result[0].password);
            if(matched) {
                return { message: "authentication successful" }
            }
            throw ("The password is invalid")
        });
    } catch (err) {
        console.log("error : ", err);
        throw err;
    }
}

module.exports = {
    signUp: signUp,
    login: login
}