import {
  obtenerProducto,
  obtenerProductos,
  agregarProducto,
  eliminarProducto,
  actualizarProducto,
} from "../models/products.models.js";

export const getAllProductsService = async () => {
  return new Promise(async (res, rej) => {
    try {
      const productos = await obtenerProductos();
      res(productos);
    } catch (error) {
      rej();
    }
  });
};

export const getProductByIdService = async (id) => {
  return new Promise(async (res, rej) => {
    try {
      const product = await obtenerProducto(id);
      res(product);
    } catch (error) {
      rej(error);
    }
  });
};

export const addProductService = async (producto) => {
  return new Promise(async (res, rej) => {
    try {
      console.log("producto recibido Services:", producto);
      const newProduct = await agregarProducto(producto);
      res(newProduct);
    } catch (error) {
      rej(error);
    }
  });
};

export const deleteProductByIdService = async (id) => {
  return new Promise(async (res, rej) => {
    try {
      const product = await obtenerProducto(id);
      if (!product) {
        console.log("producto no encontrado:", id);
        res({ status: 400, message: "Producto no encontrado" });
      }

      console.log("producto services delete:", id);
      await eliminarProducto(id);
      res({ ...product, id: id });
    } catch (error) {
      rej(error);
    }
  });
};

export const editProductService = async (id, producto) => {
  return new Promise(async (res, rej) => {
    try {
      console.log("Producto edit services:", id);
      await actualizarProducto(id, producto);
      console.log("Nuevo Producto:", { ...producto, id: id });
      res({ ...producto, id: id });
    } catch (error) {
      rej(error);
    }
  });
};
