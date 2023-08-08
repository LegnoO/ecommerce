export type IUser = {
    id: number,
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    gender: "male" | "female",
    image: string,
    token: string
}