import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Box } from "@/components/ui/box";

import { StyleSheet } from "react-native";
import Search from "@/components/Search";

const ExplorePage = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Box style={exploreStyles.container}>
                    <Search />
                </Box>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const exploreStyles = StyleSheet.create({
    container: {
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    }

});

export default ExplorePage;
