import { ICart } from "~/types/ISliceState"
import httpRequest from "./httpRequest";


class CartService {
  getUserCart = async (id: number): Promise<ICart> => {
    const response = await httpRequest.get(`/carts/user/${id}`)
    const result: ICart = response.data
    localStorage.setItem("cart", JSON.stringify(result))
    return result
  }
  addToCart = async () => {
    // const data = sessionStorage.getItem("")
    const response = await httpRequest.post("/carts/add", {
      userId: 21,
      products: [
        {
          id: 1,
          quantity: 1,
        },
        {
          id: 50,
          quantity: 2,
        },
        {
          id: 3,
          quantity: 2,
        },
      ]
    })
    console.log("cart", response)

  }

}

const cartService = new CartService()
export default cartService