import { Link } from "expo-router";
import { View, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AddIcon, SearchIcon, SettingsIcon } from "./ui/icon";
import { useColorScheme } from "react-native";
import HomeIcon from "./svg/HomeIcon";
const navItems = [
  { icon: HomeIcon, route: "/pages/HomePage" },
  { icon: SearchIcon, route: "/pages/ExplorePage" },
  { icon: AddIcon, route: "/pages/CreatePage" },
  { icon: SettingsIcon, route: "/pages/SettingsPage" },
];

const NavBar = () => {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: colorScheme === "dark" ? "black" : "#fff" },
      ]}
    >
      {navItems.map(({ icon: IconComponent, route }, index) => (
        <Link key={index} href={route as any} asChild>
          <Pressable style={styles.iconWrapper}>
            <IconComponent style={styles.icon} fill="none" />
          </Pressable>
        </Link>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 10,
  },
  iconWrapper: {
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
    color: "white",
  },
});

export default NavBar;
