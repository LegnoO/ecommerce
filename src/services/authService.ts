import httpRequest from './httpRequest';
import cartService from './cartService';

type IFormData = {
   username: string;
   password: string;
};

class AuthService {
   loginWithAuth = async ({ username, password }: IFormData) => {
      try {
         const response = await httpRequest.post('/auth/login', { username, password });
         const userId = response.data.id;
         await cartService.getUserCart(userId);
         localStorage.setItem('user', JSON.stringify(response.data));
         return response.data;
      } catch (error) {
         console.log(error);
      }
   };
}

const authService = new AuthService();
export default authService;
