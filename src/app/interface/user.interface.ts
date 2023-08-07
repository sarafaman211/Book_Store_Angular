export interface User{
    id?: string
    name?: string
    email?: string
    pssword?: string
}

export interface Credentials{
    authToken: string;
    success: boolean;
}

export interface UserDetail{
    user: User
}