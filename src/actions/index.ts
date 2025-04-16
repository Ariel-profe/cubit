import { loginUser, logout, registerUser } from './auth';
import { loadProductsFromCart } from './cart/load-products-from-cart.action';
import { getNotebooksByPage, getNotebookBySlug, createUpdateNotebook } from './products';

export const server = {
  // actions

  // Auth
  loginUser,
  logout,
  registerUser,

  // Products
  getNotebooksByPage,
  getNotebookBySlug,

  // Cart
  loadProductsFromCart,

  // Admin
  createUpdateNotebook
};
