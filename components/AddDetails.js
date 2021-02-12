import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

export default function AddDetails() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Add Details</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleText: {
    fontSize: 30,
    marginTop: 15,
    marginBottom: 30,
    marginLeft: 20,
  },
});
