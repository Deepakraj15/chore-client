import { useEffect } from "react";
import { Text, View } from "react-native";

const Home = () => {
  useEffect(() => {
    
  }, []);
  return (
    <View className="w-full h-screen justify-center p-10 bg-background-light dark:bg-background-dark">
      <Text className="text-base">You are in home</Text>
    </View>
  );
};

export default Home;
