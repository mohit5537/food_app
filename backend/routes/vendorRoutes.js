const vendorController = require("../controllers/VendorController");
const express = require("express");
const router = express.Router();

router.post("/addVendor", vendorController.vendorRegister);
router.post("/login", vendorController.vendorLogin);
router.get("/get-vendors", vendorController.getAllVendors);
router.get("/single-vendor/:id", vendorController.getVendorById);

module.exports = router;
