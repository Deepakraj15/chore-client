import { View, TouchableOpacity, Text } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={{ width: 100, height: 40, backgroundColor: "blue", justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity>
        <Link href="./pages/home">
          <Text style={{ color: "white" }}>Go to Home</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
}
