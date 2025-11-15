import Register from "@/components/Auth/register";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RegisterPage() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Register />
        </SafeAreaView>
    );
}