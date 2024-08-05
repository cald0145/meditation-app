import { View, Text, ImageBackground, Pressable } from "react-native";
import React from "react";

import MEDITATION_IMAGES from "@/constants/meditation-images";
import AppGradient from "@/components/AppGradient";
import { router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const Meditate = () => {
  return (
    <View className="flex-1">
      <ImageBackground
        source={MEDITATION_IMAGES[0]}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient
          colors={["transparent", "rgba(0, 0, 0, 0.8)"]}
        ></AppGradient>
        <Pressable
          onPress={() => router.back()}
          className="absolute top-16 left-6 z-10"
        >
          <AntDesign name="leftcircleo" size={40} color="white" />
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default Meditate;
