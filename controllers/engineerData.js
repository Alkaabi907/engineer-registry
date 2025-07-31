const Engineer = require('../models/engineer');

const dataController = {};

// INDEX - Get all engineers
dataController.index = async (req, res, next) => {
  try {
    const engineers = await Engineer.find({});
    res.locals.data.engineers = engineers;
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// SHOW - Get one engineer by ID
dataController.show = async (req, res, next) => {
  try {
    const engineer = await Engineer.findById(req.params.id);
    if (!engineer) {
      return res.status(404).json({ error: `Engineer with ID ${req.params.id} not found` });
    }
    res.locals.data.engineer = engineer;
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE - Add a new engineer
dataController.create = async (req, res, next) => {
  try {
    const available = req.body.available === 'on' || req.body.available === true;
    const newEngineer = await Engineer.create({ ...req.body, available });
    res.locals.data.engineer = newEngineer;
    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// UPDATE - Update an existing engineer
dataController.update = async (req, res, next) => {
  try {
    const available = req.body.available === 'on' || req.body.available === true;
    const updatedEngineer = await Engineer.findByIdAndUpdate(
      req.params.id,
      { ...req.body, available },
      { new: true, runValidators: true }
    );
    if (!updatedEngineer) {
      return res.status(404).json({ error: `Engineer with ID ${req.params.id} not found` });
    }
    res.locals.data.engineer = updatedEngineer;
    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DESTROY - Delete an engineer
dataController.destroy = async (req, res, next) => {
  try {
    const deletedEngineer = await Engineer.findByIdAndDelete(req.params.id);
    if (!deletedEngineer) {
      return res.status(404).json({ error: `Engineer with ID ${req.params.id} not found` });
    }
    res.locals.data.engineer = deletedEngineer;
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = dataController;
