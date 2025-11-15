import { COLORS } from "@/constants/colors";
import { loginUser } from "@/lib/auth";
import { router } from "expo-router";
import { Lock, Mail } from "lucide-react-native";
import { useState } from "react";
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert("Error", "Email dan password tidak boleh kosong.");
            return;
        }
        try {
            const res = await loginUser(email, password);
            if (res.access_token) {
                router.replace("/Homepage/page");
            }
        } catch (error) {
            Alert.alert("Login Gagal", "Email atau password salah. Silakan coba lagi.");
        }
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.background,
                justifyContent: "space-between",
                paddingBottom: 40,
            }}
        >
            {/* Image */}
            <Image
                source={require("@/assets/auth/login.png")}
                style={{
                    width: 300,
                    height: 300,
                    resizeMode: "contain",
                    alignSelf: "center",
                    marginTop: 30,
                }}
            />

            {/* Heading */}
            <View
                style={{
                    alignItems: "flex-start",
                    marginTop: 10,
                    paddingHorizontal: 20,
                }}
            >
                <Text style={{ fontSize: 32, fontWeight: "bold", color: COLORS.textDark }}>
                    Masuk
                </Text>
                <Text style={{ fontSize: 16, color: COLORS.textMuted }}>
                    Silakan masuk untuk melanjutkan
                </Text>
            </View>

            {/* Inputs */}
            <View style={{ paddingHorizontal: 20, marginTop: 20, gap: 15 }}>

                {/* Email */}
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "rgba(0,0,0,0.04)",
                        borderRadius: 30,
                        paddingHorizontal: 12,
                        paddingVertical: 10,
                    }}
                >
                    <Mail size={20} color={COLORS.textDark} />
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        placeholder="Email"
                        placeholderTextColor={COLORS.placeholder}
                        style={{
                            marginLeft: 10,
                            flex: 1,
                            fontSize: 16,
                            color: COLORS.textDark,
                        }}
                    />
                </View>

                {/* Password */}
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "rgba(0,0,0,0.04)",
                        borderRadius: 30,
                        paddingHorizontal: 12,
                        paddingVertical: 10,
                    }}
                >
                    <Lock size={20} color={COLORS.textDark} />
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Password"
                        placeholderTextColor={COLORS.placeholder}
                        secureTextEntry
                        style={{
                            marginLeft: 10,
                            flex: 1,
                            fontSize: 16,
                            color: COLORS.textDark,
                        }}
                    />
                </View>
            </View>

            {/* Bottom Section */}
            <View
                style={{
                    paddingHorizontal: 20,
                    gap: 15,
                }}
            >
                {/* Register Button */}
                <TouchableOpacity
                    style={{
                        backgroundColor: COLORS.primary,
                        paddingVertical: 14,
                        borderRadius: 30,
                        alignItems: "center",
                    }}
                    onPress={handleLogin}
                >
                    <Text
                        style={{
                            color: "white",
                            fontSize: 18,
                            fontWeight: "600",
                        }}
                    >
                        Masuk
                    </Text>
                </TouchableOpacity>

                {/* Already have account */}
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <Text style={{ color: COLORS.textMuted, fontSize: 14 }}>
                        Belum punya akun?{" "}
                    </Text>
                    <TouchableOpacity onPress={() => router.push("/auth/register/page")}>
                        <Text style={{ color: COLORS.primary, fontSize: 14, fontWeight: "600" }}>
                            Daftar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
