import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { shadowColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Header = () => {
    return(
        <View style={styles.headerStyle}>
            <Text style={styles.textStyle}>Disney Albums</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: "#242e42",
        alignItems: "center",
        justifyContent: "center",
        height: 60,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3},
        shadowOpacity: 0.5,
        elevation: 4,
    },
    textStyle: {
        fontSize: 20,
        color: "#e5bb7f",
        fontFamily: "Georgia"
    },
});

export default Header;