import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const AlbumDetail = (props) => {
    const { thumbnail_image, title, artist, image } = props.album;
    return(
        <View style={styles.cardContainerStyle}>
            <View style={styles.thumbnailContainerStyle}>
                <Image
                    style={styles.thumbnailStyle}
                    source={{
                        uri: thumbnail_image
                    }}
                />
                <View style={styles.headerContentStyle}>
                    <Text style={styles.titleTextStyle}>{title}</Text>
                    <Text style={styles.artistTextStyle}>{artist}</Text>
                </View>
            </View>
            <View style={styles.cardSectionStyle}>
                <Image
                    style={styles.imageStyle}
                    source={{
                        uri: image
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainerStyle: {
        borderTopWidth: 1,
        borderColor: "#ffffff80",
        marginHorizontal: 15,
        marginVertical: 15
    },
    thumbnailContainerStyle: {
        flexDirection: "row",
        padding: 5
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
        borderRadius: 50,
        margin: 5
    },
    headerContentStyle: {
        justifyContent: "center",
        paddingLeft: 10
    },
    titleTextStyle: {
        color: "#fff",
        fontSize: 18,
    },
    artistTextStyle: {
        color: "#ffffff90"
    },
    cardSectionStyle: {
        padding: 5,
        borderWidth: 1,
        borderColor: "#e5bb7f",
        borderRadius: 2
    },
    imageStyle: {
        height: 350,
        width: null
    },
});

export default AlbumDetail;