const Product = require("../models/ProductModel");
const Firm = require("../models/FirmModel");
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

const addProduct = async (req, res) => {
  try {
    const { productName, price, category, bestSeller, description } = req.body;
    const image = req.file ? req.file.filename : undefined;
    const firmId = req.params.firmId;
    const firm = await Firm.findById(firmId);
    if (!firm) {
      return res.status(404).json({ message: "Something went wrong" });
    }

    const product = new Product({
      productName,
      price,
      category,
      bestSeller,
      description,
      image,
      firm: firm._id,
    });

    const savedProduct = await product.save();
    firm.products.push(savedProduct);
    await firm.save();

    return res.status(200).json({ message: "product added", savedProduct });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error ?? "Internal Server error" });
  }
};

const getProductByFirm = async (req, res) => {
  const firmId = req.params.firmId;
  try {
    const firm = await Firm.findById(firmId);
    if (!firm) {
      return res.status(404).json({ message: "Firm ID not found" });
    }
    const restaurantName = firm.firmName;
    const products = await Product.find({ firm: firmId });
    res.status(200).json({ restaurantName, products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error ?? "Internal Server error" });
  }
};

const deleteProductById = async (req, res) => {
  try {
    const productId = req.params.deleteId;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deleteProductById) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error ?? "Internal Server error" });
  }
};

module.exports = {
  addProduct: [upload.single("image"), addProduct],
  getProductByFirm,
  deleteProductById,
};
