var express = require('express');
var router = express.Router();
const userController = require('../controllers/user');
router.get('/', userController.getUsers);
router.post('/', userController.updateUser);
router.put('/:_id', userController.updateUser);
router.delete('/:_id', userController.deleteUserById);
router.get('/:_id', userController.getUserById);
router.get('/namesearch/:name', userController.getUserByName);
router.get('/usernamesearch/:username', userController.getUserByUsername);
router.get('/dobsearch/:dob', userController.getUserByDOB);
router.get('/passwordsearch/:password', userController.getUserByPassword);
module.exports = router;