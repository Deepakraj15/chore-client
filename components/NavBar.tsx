import { Link } from "expo-router";
import { View, Image, StyleSheet } from "react-native";

const NavBar = () => {
  return (
      <View style={styles.container}>
        <Link href={"../pages/HomePage"}>
            <Image source={require("../assets/images/home.png")} style={styles.icon} />
      </Link>
      <Link href={"../pages/LoginPage"}>
        <Image source={require("../assets/images/community.png")} style={styles.icon} />
        </Link>
    </View>
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
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default NavBar;
