const Firm = require("../models/FirmModel");
const Vendor = require("../models/VendorModel");
const multer = require("multer");

// code to upload and store the image
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

const upload = multer({ storage: storage });

const addFirm = async (req, res) => {
  try {
    const { firmName, area, category, region, offer } = req.body;
    const image = req.file ? req.file.filename : undefined;
    const vendor = await Vendor.findById(req.vendorId);
    if (!vendor) {
      return res.status(404).json({ error: "Vendor not found" });
    }
    const firm = new Firm({
      firmName,
      area,
      category,
      region,
      image,
      offer,
      vendor: vendor._id,
    });
    const savedFirm = await firm.save();
    vendor.firm.push(savedFirm);
    await vendor.save();

    return res.status(200).json({ message: "Firm added Success" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server error" || error });
  }
};

const deleteFirmById = async (req, res) => {
  try {
    const firmId = req.parms.firmId;
    const deletedFirmId = await Firm.findByIdAndDelete(firmId);
    if (!deletedFirmId) {
      return res.status(404).json({ message: "No Firm Id found" });
    }

    res.status(200).json({ message: "Firm deleted Succes!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server error" || error });
  }
};

module.exports = { addFirm: [upload.single("image"), addFirm], deleteFirmById };
