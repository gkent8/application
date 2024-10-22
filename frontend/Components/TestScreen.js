import React from "react";
import { SafeAreaView, Text, Button, StyleSheet } from "react-native";

export default function TestScreen({ navigation }) {
  const navigateToWelcome = () => {
    navigation.navigate("Welcome");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Test Screen</Text>
      <Button title="Go to Welcome Screen" onPress={navigateToWelcome} />
    </SafeAreaView>
  );
}
