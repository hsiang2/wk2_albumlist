import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <AlbumList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131a28",
  },
});
