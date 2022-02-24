var express = require('express');
var router = express.Router();
var userService = require('../service/user');
var jwt = require('jsonwebtoken')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* User Signup */
router.post('/signup',async function(req, res, next) {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const response = await userService.signUp(username, password);
    return res.json({
      ...response
    });
  } catch (err) {
    throw err;
  }
});

/* User Login */
router.post('/login', async function(req, res, next) {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const response = await userService.login(username, password);
    return res.json({
      ...response
    });
  } catch (err) {
    return res.status(401).json({
      message : err.message || "authentication failed"
    })
  }
})

/*Get Token Test API */
router.get("/token", async function(req, res, next) {
  try {
    const token = jwt.sign({ 
      name: 'vinod' 
    }, 'local_ci_cd_pipeline', 
    { expiresIn: 86400});
    return res.json({
      token: token
    })
  } catch (err) {
    return res.status(500).json({
      message: err.message || "internal server error"
    });
  }
});

/* Validate Token Test API */
router.get("/validate_token", async function(req, res, next) {
  try {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidmlub2QiLCJpYXQiOjE2NDUwNTgwNDcsImV4cCI6MTY0NTE0NDQ0N30.FdAJe9XXt4NN21eacSjMGXT3gfW_zT3SglLcquKNQjM"
    const decoded = jwt.verify(token, 'local_ci_cd_pipeline');
    return res.json({
      message: "Token validated successfully"
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message || "internal server error"
    });
  }
});

module.exports = router;
