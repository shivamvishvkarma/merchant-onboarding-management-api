const Partner = require("../models/Partner");

// Create Partner
exports.createPartner = async (req, res) => {
  try {
    const partner = await Partner.create(req.body);
    res.status(201).json(partner);   // ✅ small p
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Get All Partners
exports.getPartners = async(req, res) =>{
const partners = await Partner.find();
res.json(partners);
};

// Get Single Partner
exports.getPartnerById = async (req, res) =>{
    const partner = await Partner.findById(req.params.id);
    res.json(partner);
};

// update partner
exports.updatePartner = async (req, res) =>{
    const partner = await Partner.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(partner);
};

// Delete Partner
exports.deletePartner = async (req, res) => {
  await Partner.findByIdAndDelete(req.params.id);
  res.json({ message: "Partner deleted" });
};