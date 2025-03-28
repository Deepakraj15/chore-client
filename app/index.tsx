import { Link } from "expo-router";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import "@/global.css";

export default function Index() {
  return (
    <View className="w-10 h-10 bg-blue-500" >
      <TouchableOpacity>
        <Link href="../pages/HomePage" style={{ fontSize: 18, color: "blue" }}>
          <Text>Go to Home</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
}
