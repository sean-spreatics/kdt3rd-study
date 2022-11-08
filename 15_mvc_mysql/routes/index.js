const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

// 기본주소: localhost:PORT

// GET / => localhost:PORT/
router.get('/', controller.main);

// GET /visitor => localhost:PORT/visitor
router.get('/visitor', controller.getVisitors); // 전체 조회

// POST /visitor/write => localhost:PORT/visitor/write
router.post('/visitor/write', controller.postVisitor); // 하나 추가

// DELETE /visitor/delete => localhost:PORT/visitor/delete
router.delete('/visitor/delete', controller.deleteVisitor); // 하나 삭제

module.exports = router;
