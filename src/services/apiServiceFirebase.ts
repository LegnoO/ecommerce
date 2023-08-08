import axios, { AxiosRequestConfig, AxiosResponse } from "axios";


interface IProps {
    (
        method: "GET" | "POST" | "PUT" | "DELETE",
        endpoint: string,
        data?: any,
        id?: number | string | null
    ): Promise<AxiosResponse<any>>;
}

const httpRequestFirebase: IProps = async (
    method,
    endpoint,
    id = "",
    data = null,
) => {
    const baseURL = "https://ecommerce-api-133d7-default-rtdb.firebaseio.com";
    // orderBy="username"&equalTo="empty"

    const config: AxiosRequestConfig = {
        method,
        headers: { Accept: "application/json" },
        baseURL,
        url: `${baseURL}${endpoint}/${id}.json`,
        data
    };
    console.log(config.url)

    const response = await axios(config);
    return response;

};


export default httpRequestFirebase;
