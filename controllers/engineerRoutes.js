const express = require('express');
const router = express.Router();

// Controllers
const viewController = require('./engineerViews.js');
const dataController = require('./engineerData.js');
const apiController = require('./engineerAPI.js');

/* ==========
   View Routes
   ========== */
// INDEX (HTML)
router.get('/', dataController.index, viewController.index);

// NEW (Form)
router.get('/new', viewController.newView);

// CREATE (HTML)
router.post('/', dataController.create, viewController.redirectHome);

// SHOW (HTML)
router.get('/:id', dataController.show, viewController.show);

// EDIT (Form)
router.get('/:id/edit', dataController.show, viewController.edit);

// UPDATE (HTML)
router.put('/:id', dataController.update, viewController.redirectShow);

// DELETE (HTML)
router.delete('/:id', dataController.destroy, viewController.redirectHome);


/* ==========
   API Routes (JSON)
   ========== */
// INDEX (JSON)
router.get('/api', dataController.index, apiController.index);

// CREATE (JSON)
router.post('/api', dataController.create, apiController.show);

// SHOW (JSON)
router.get('/api/:id', dataController.show, apiController.show);

// UPDATE (JSON)
router.put('/api/:id', dataController.update, apiController.show);

// DELETE (JSON)
router.delete('/api/:id', dataController.destroy, apiController.destroy);


module.exports = router;
