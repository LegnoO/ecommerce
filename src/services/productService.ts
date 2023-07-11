import axios, { AxiosRequestConfig } from "axios"
import { IProduct } from "~/models/ISliceState"

class ProductService {
  getProduct = async (): Promise<IProduct[]> => {
    const config: AxiosRequestConfig = {
      method: "GET",
      headers: { Accept: "application/json" },
      baseURL: import.meta.env.VITE_BASE_URL,
      // url: `products.json`,
      url: "products"
    };
    try {
      console.log(import.meta.env.VITE_BASE_URL)

      const response = await axios(config)
      // const result = Object.values(response.data)
      const result: IProduct[] = response.data.products.slice(0, 10)
      return result
    } catch (error) {
      throw error
    }
  }
}

const productService = new ProductService()
export default productService