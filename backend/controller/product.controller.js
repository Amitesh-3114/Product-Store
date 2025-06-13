import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ success: true, data: products });
      } catch (error) {
        console.error("Error fetching products:", error.message);
        res.status(500).json({ message: "Internal server error" }); 
      }};

export const createProduct = async (req, res) => {const product = req.body;
    if(!product.name || !product.price || !product.image){
      return res.status(400).json({success: false,message: "All fields are required"});
    }
    const newProduct = new Product(product);
  
    try{
      await newProduct.save();
      res.status(201).json({ sucess: true, data: newProduct });
    }catch(error){
      console.error("Error creating product:", error.message);
      res.status(500).json({ message: "Internal server error" });
  }};

export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(id, updatedProduct, { new: true });
        if (!product) {
          return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({ success: true, data: product });
      } catch (error) {
        console.error("Error updating product:", error.message);
        res.status(500).json({ message: "Internal server error" });
      }};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    console.log("Deleting product with ID:", id);
    try {
      const deletedProduct = await Product.findByIdAndDelete(id);
      if (!deletedProduct) {
        return res.status(404).json({ success: false, message: "Product not found" });
      }
      res.status(200).json({ success: true, data: deletedProduct });
    } catch (error) {
      console.error("Error deleting product:", error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  };