import AsyncStorage from "@react-native-async-storage/async-storage";
import { ApiFetch } from "./api";

export async function registerUser(data: {
    name: string;
    email: string;
    password: string;
    role_user: string;
}) {
    return ApiFetch("/api/users/create", {
        method: "POST",
        body: JSON.stringify(data),
    })

}

export async function loginUser(email: string, password: string) {
    const res = await ApiFetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
    });

    if (res.access_token) {
        await AsyncStorage.setItem("access_token", res.access_token);
    }
    return res;

}