import { router } from "expo-router";
import LottieView from "lottie-react-native";
import React from "react";
import { View } from "react-native";

export default function SplashScreen() {
  const handleAnimationFinish = () => {
    router.replace("/onboarding/FirstPage");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LottieView
        source={require("../assets/lottie/lottie.json")}
        style={{ width: 300, height: 300 }}
        autoPlay
        loop={false}
        onAnimationFinish={handleAnimationFinish}
      />
    </View>
  );
}
