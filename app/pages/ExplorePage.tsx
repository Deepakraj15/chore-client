import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import Search from "@/components/Search";

const ExplorePage = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1">
                <View className="p-4">
                    <Search />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default ExplorePage;
