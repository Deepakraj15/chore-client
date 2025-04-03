import { Link } from "expo-router";
import { View, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AddIcon, GlobeIcon, SearchIcon, SettingsIcon } from "./ui/icon";
import ProfileIcon from "./svg/ProfileIcon";

const navItems = [
  { icon: GlobeIcon, route: "/pages/HomePage" },
  { icon: SearchIcon, route: "/pages/ExplorePage" },
  { icon: AddIcon, route: "/pages/HomePage" },
  { icon: SettingsIcon, route: "/pages/SettingsPage" },
  { icon: ProfileIcon, route: "/pages/ProfilePage" },
];

const NavBar = () => {
  return (
    <SafeAreaView style={styles.container}>
      {navItems.map(({ icon: IconComponent, route }, index) => (
        <Link key={index} href={route as  any} asChild>
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
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#ccc",
    paddingBottom: 10,
  },
  iconWrapper: {
    padding: 10, 
  },
  icon: {
    width: 24,
    height: 24,
    color: "black",
  },
});

export default NavBar;
