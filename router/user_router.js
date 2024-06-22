const express = require('express');
const {
  login, verifyToken, getUser, chiefEntry, foodEntry, foodEdit, foodDelete, foodFetch, Orders, orderDelete
} = require('../controller/user_controller');
const router = express.Router();

router.post('/login', login);
router.get('/users', verifyToken, getUser);
router.put('/chief/:id', chiefEntry);
router.put('/food/:id', foodEntry);
router.put('/foodEdit/:id', foodEdit);
router.put('/fooddelete/:id', foodDelete);
router.get('/client/:id', foodFetch);
router.put('/orders/:id', Orders);
router.put('/deleteorders/:id', orderDelete);

module.exports = router;
