import { Link } from "expo-router";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity>
        <Link href="/pages/HomePage" style={{ fontSize: 18, color: "blue" }}>
          <Text>Go to Home</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
}
