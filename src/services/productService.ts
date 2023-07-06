import axios, { AxiosRequestConfig } from "axios"

class ProductService {
  getProduct = async () => {
    const config: AxiosRequestConfig = {
      method: "GET",
      headers: { Accept: "application/json" },
      baseURL: import.meta.env.VITE_BASE_URL,
      url: `products.json`,
    };
    try {
      const response = await axios(config)
      const result = Object.values(response.data)
      return result
    } catch (error) {
      throw error
    }
  }
}

const productService = new ProductService()
export default productService