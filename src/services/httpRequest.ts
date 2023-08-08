import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

class HttpRequest {
    url: string
    config: AxiosRequestConfig

    constructor() {
        this.url = import.meta.env.VITE_BASE_URL
        this.config = {
            headers: {
                // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
                'Content-Type': 'application/json',
            }
        };
    }

    get = async (path: string): Promise<AxiosResponse> => {
        return axios.get(this.url + path, this.config)
    }
    post = async (path: string, data: object): Promise<AxiosResponse> => {
        return axios.post(this.url + path, data, this.config)
    }
}

const httpRequest = new HttpRequest();

export default httpRequest;