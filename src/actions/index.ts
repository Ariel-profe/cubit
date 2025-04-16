import { loginUser, logout, registerUser } from './auth';
import { loadProductsFromCart } from './cart/load-products-from-cart.action';
import { getNotebooksByPage, getNotebookBySlug, createUpdateNotebook, getNotebooksCounted, deleteProductImage } from './products';
import { getCategories } from './categories/get-categories';;

export const server = {
  // actions

  // Auth
  loginUser,
  logout,
  registerUser,

  // Products
  getNotebooksByPage,
  getNotebookBySlug,
  deleteProductImage,

  //Counted Products
  getNotebooksCounted,

  // Cart
  loadProductsFromCart,

  // Admin
  createUpdateNotebook,
  getCategories
};
