import React from "react";
import { ScrollView } from "react-native";
import AlbumDetail from "./AlbumDetail";
import albumData from "../json/albums.json"

const AlbumList = () => {
    return(
        <ScrollView>
            <AlbumDetail album = {albumData[0]} />
            <AlbumDetail album = {albumData[1]} />
            <AlbumDetail album = {albumData[2]} />
            <AlbumDetail album = {albumData[3]} />
            <AlbumDetail album = {albumData[4]} />
        </ScrollView>
    );
};

export default AlbumList;
