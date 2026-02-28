const Vendor = require("../models/VendorModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

dotenv.config();
const SECRET_KEY = process.env.whatIsUrName;

const vendorRegister = async (req, res) => {
  const { userName, emailAddress, password } = req.body;
  try {
    const vendorEmail = await Vendor.findOne({ emailAddress });
    if (vendorEmail) {
      res.status(400).json({ error: "Email Already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newVendor = new Vendor({
      userName,
      emailAddress,
      password: hashedPassword,
    });
    await newVendor.save();
    res.status(200).json({ message: "Vendor Registered Success!" });
    console.log("registered");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server error" || error });
  }
};

const vendorLogin = async (req, res) => {
  const { emailAddress, password } = req.body;
  try {
    const vendor = await Vendor.findOne({ emailAddress });
    if (!vendor || !(await bcrypt.compare(password, vendor.password))) {
      res
        .status(404)
        .json({ error: "Email or password details are not correct" });
    }
    const token = jwt.sign({ vendorId: vendor._id }, SECRET_KEY, {
      expiresIn: "2hr",
    });
    res.status(200).json({ message: "Login Succes!", token });
    console.log(emailAddress, token);
  } catch (e) {
    res.status(500).json({ error: "Internal Server error" });
  }
};

const getAllVendors = async (req, res) => {
  try {
    const vendorsList = await Vendor.find().populate("firm");
    if (!vendorsList.length) {
      return res.status(404).json({ message: "No Results found" });
    }
    res.json({ vendorsList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getVendorById = async (req, res) => {
  const vendorId = req.params.id;
  try {
    const vendor = await Vendor.findById(vendorId).populate("firm");
    if (!vendor) {
      return res.status(404).json({ message: "Id not found" });
    }
    res.status(200).json(vendor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { vendorRegister, vendorLogin, getAllVendors, getVendorById };
