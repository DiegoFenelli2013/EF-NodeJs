import * as productService from "../services/products.services.js";

export const addProduct = async (req, res) => {
  try {
    const product = req.body;
    console.log("producto controller:", req.body);
    const newProduct = await productService.addProductService(product);
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;

    if (id) {
      console.log("producto controller delete:", id);
      const response = await productService.deleteProductByIdService(id);
      if (response.status == 400) {
        console.log("producto controller no encontrado:", response.message);
        return res.status(400).send(response);
      }
      return res.status(200).json(response);
    } else {
      return res.status(400).json(error);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
export const editProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = req.body;
    console.log("producto controller:", req.body, "id:", id);
    const newProduct = await productService.editProductService(id, product);
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getAllProducts = async (req, res) => {
  try {
    console.log("paso1");
    const products = await productService.getAllProductsService();
    console.log("Respuesta controller:", products);
    res.status(200).json(products);
  } catch (error) {
    res.status(500);
  }
};

export const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    if (id) {
      const product = await productService.getProductByIdService(id);
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: "Producto no encontrado" });
      }
    } else {
      res.status(400).json(error);
    }
  } catch (error) {
    res.status(500);
  }
};
