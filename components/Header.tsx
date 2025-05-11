import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useColorScheme } from "react-native";
import { SettingsIcon } from "./ui/icon"; // Or replace with any other icon
import { Link } from "expo-router";
import { Avatar, AvatarFallbackText, AvatarImage } from "./ui/avatar";

const Header = ({ title = "Home" }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDark ? "black" : "#fff" }]}>
      <Text style={[styles.title, { color: isDark ? "white" : "black" }]}>{title}</Text>

      <Link href="/pages/ProfilePage" asChild>
        <Pressable style={styles.iconWrapper}>
          <Avatar size="sm">
            <AvatarFallbackText>JD</AvatarFallbackText>
            <AvatarImage source={{ uri: "https://i.pravatar.cc/150?img=3" }} />
        </Avatar>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  iconWrapper: {
      padding: 1,
      backgroundColor: "white",
      borderRadius: "50%",
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default Header;
