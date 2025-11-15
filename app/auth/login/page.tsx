import Login from "@/components/Auth/login";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RegisterPage() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Login />
        </SafeAreaView>
    );
}