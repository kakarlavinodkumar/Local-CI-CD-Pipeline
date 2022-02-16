var express = require('express');
var router = express.Router();
var userService = require('../service/user');

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
module.exports = router;
