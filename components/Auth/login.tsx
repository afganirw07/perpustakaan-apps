ximport { User, Mail, Lock } from "lucide-react-native";
import { Image, Text, TextInput, View, TouchableOpacity } from "react-native";
import { COLORS } from "@/constants/colors";
import { router } from "expo-router";

export default function Register() {
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
                source={require("@/assets/auth/register.png")}
                style={{
                    width: 250,
                    height: 250,
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
                    Daftar
                </Text>
                <Text style={{ fontSize: 16, color: COLORS.textMuted }}>
                    Silakan daftar untuk melanjutkan
                </Text>
            </View>

            {/* Inputs */}
            <View style={{ paddingHorizontal: 20, marginTop: 20, gap: 15 }}>
                {/* Name */}
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
                    <User size={20} color={COLORS.textDark} />
                    <TextInput
                        placeholder="Nama Lengkap"
                        placeholderTextColor={COLORS.placeholder}
                        style={{
                            marginLeft: 10,
                            flex: 1,
                            fontSize: 16,
                            color: COLORS.textDark,
                        }}
                    />
                </View>

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
                    onPress={() => console.log("Register pressed")}
                >
                    <Text
                        style={{
                            color: "white",
                            fontSize: 18,
                            fontWeight: "600",
                        }}
                    >
                        Daftar
                    </Text>
                </TouchableOpacity>

                {/* Already have account */}
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <Text style={{ color: COLORS.textMuted, fontSize: 14 }}>
                        Sudah punya akun?{" "}
                    </Text>
                    <TouchableOpacity onPress={() => router.push("/auth/login")}>
                        <Text style={{ color: COLORS.primary, fontSize: 14, fontWeight: "600" }}>
                            Masuk
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
