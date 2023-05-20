const express = require('express');
const router = express.Router();

const personaController = require('../controllers/personaController');

router.get('/', personaController.list);
router.post('/add', personaController.save);
router.get('/delete/:id', personaController.delete);

router.get('/update/:id', personaController.edit);
router.post('/update/:id', personaController.update);

/*
router.get('/',(req, res) => {
  res.send('hello world');
}); */

module.exports = router;