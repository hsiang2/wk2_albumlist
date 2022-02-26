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
                    <Text>{title}</Text>
                    <Text>{artist}</Text>
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

    },
    thumbnailContainerStyle: {

    },
    thumbnailStyle: {

    },
    headerContentStyle: {

    },
    cardSectionStyle: {

    },
    imageStyle: {

    },
});

export default AlbumDetail;