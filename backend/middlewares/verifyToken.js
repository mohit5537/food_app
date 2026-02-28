const Vendor = require("../models/VendorModel");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const SECRET_KEY = process.env.whatIsUrName;

const verifyToken = async (req, res, next) => {
  const token = await req.headers.token;
  if (!token) {
    return res.status(404).json({ error: "Token is rquired" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    const vendor = await Vendor.findById(decoded.vendorId);
    if (!vendor) {
      return res.status(404).json({ error: "Vendor not found!" });
    }
    req.vendorId = vendor._id;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" || error });
  }
};

module.exports = verifyToken;
