const Form = require('../models/Form');

exports.submitForm = async (req, res) => {
  try {
    const { title, description, typeoffood, quantity } = req.body;
    if (!title || !description || !typeoffood || !quantity) {
      return res.status(400).json({ message: 'All required fields must be provided' });
    }

    const form = new Form({ title, description, typeoffood, quantity });
    await form.save();
    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'An error occurred while submitting the form' });
  }
};

exports.getFormData = async (req, res) => {
  try {
    const formData = await Form.findOne().sort({ createdAt: -1 }).exec();
    res.status(200).json(formData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve form data', error: error.message });
  }
};
