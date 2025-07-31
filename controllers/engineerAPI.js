const Engineer = require('../models/engineer');

const engineerAPI = {};

// GET /engineers - List all engineers
engineerAPI.index = async (req, res) => {
  try {
    const engineers = await Engineer.find({});
    res.status(200).json(engineers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET /engineers/:id - Get one engineer by ID
engineerAPI.show = async (req, res) => {
  try {
    const engineer = await Engineer.findById(req.params.id);
    if (!engineer) {
      return res.status(404).json({ error: 'Engineer not found' });
    }
    res.status(200).json(engineer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST /engineers - Create a new engineer
engineerAPI.create = async (req, res) => {
  try {
    const available = req.body.available === true || req.body.available === 'on';
    const newEngineer = await Engineer.create({ ...req.body, available });
    res.status(201).json(newEngineer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// PUT /engineers/:id - Update an engineer
engineerAPI.update = async (req, res) => {
  try {
    const available = req.body.available === true || req.body.available === 'on';
    const updatedEngineer = await Engineer.findByIdAndUpdate(
      req.params.id,
      { ...req.body, available },
      { new: true, runValidators: true }
    );
    if (!updatedEngineer) {
      return res.status(404).json({ error: 'Engineer not found' });
    }
    res.status(200).json(updatedEngineer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE /engineers/:id - Delete an engineer
engineerAPI.destroy = async (req, res) => {
  try {
    const deleted = await Engineer.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Engineer not found' });
    }
    res.status(200).json({ message: 'Engineer deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = engineerAPI;
