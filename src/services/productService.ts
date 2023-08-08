import { IProduct } from "~/types/ISliceState"
import httpRequest from "./httpRequest";

class ProductService {
  getAllProduct = async (): Promise<IProduct[]> => {
    const response = await httpRequest.get("/products")
    // const result = Object.values(response.data)
    const result: IProduct[] = response.data.products.slice(0, 10)
    return result
  }
  
  getSingleProduct = async (id: string): Promise<IProduct> => {
    const response = await httpRequest.get(`/products/${id}`)
    const result: IProduct = response.data
    return result
  }
}

const productService = new ProductService()
export default productService