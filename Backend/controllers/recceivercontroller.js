const Receiver = require('../models/Recceiver');

exports.submitReceiver = async (req, res) => {
  try {
    const { bname, cname, mno, email, address, pincode, city, state } = req.body;
    if (!bname || !mno || !email || !address || !pincode || !city || !state) {
      return res.status(400).json({ message: 'All required fields must be provided' });
    }

    const receiver = new Receiver({ bname, cname, mno, email, address, pincode, city, state });
    await receiver.save();
    res.status(200).json({ message: 'Receiver added successfully' });
  } catch (error) {
    console.error('Error adding receiver:', error);
    res.status(500).json({ message: 'An error occurred while adding the receiver' });
  }
};
