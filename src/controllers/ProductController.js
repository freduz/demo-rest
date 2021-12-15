/* eslint-disable no-useless-constructor */
import Product from '../models/Product';
import ProductService from '../services/ProductService';
import Controller from './Controller';

const productService = new ProductService(Product);

class ProductController extends Controller {
  constructor(service) {
    super(service);
  }
}

export default new ProductController(productService);
