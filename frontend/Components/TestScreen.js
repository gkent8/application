import React from "react";
import { SafeAreaView, Text } from "react-native";
import styles from "./styles/styles";

export default function TestScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Welcome to test screen!</Text>
    </SafeAreaView>
  );
}
