import { PRODUCT_ADDED_SUCCESSFULLY } from "./constants/messages.js";
import { IProductDetails, ProductCategory } from "./product-details.interface.js";
import { IProduct } from "./product.interface.js";

export class ProductManagementService implements IProduct {
  private storage: IProductDetails[];
  constructor(externalStorage?: IProductDetails[]) {
    this.storage = externalStorage || [];
  }

  addProduct(product: IProductDetails): string {
    this.storage.push(product);
    return PRODUCT_ADDED_SUCCESSFULLY;
  }

  filterProductsByCategory(
    products: IProductDetails[],
    category: ProductCategory
  ): IProductDetails[] {
    return products.filter((product) => product.category == category);
  }

  isProductAvailable(product: IProductDetails): boolean {
    return product.status == "In Stock" ? true : false;
  }
}
