import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  View,
} from "react-native";
import styles from "./styles/styles";

export default function TestScreen() {
  const [data, setData] = useState([]); // To store the fetched data
  const [loading, setLoading] = useState(false); // To manage the loading state
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setData(json); // Update the data state
  //       setLoading(false); // Data has been loaded
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       setLoading(false); // Stop loading even if there's an error
  //     });
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Welcome!</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : data.length ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.body}</Text>
            </View>
          )}
        />
      ) : (
        <Text>No data</Text>
      )}

      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Test Screen"
          onPress={navigateToTestScreen}
        />
        <Button style={styles.button} title="Logout" onPress={handleLogout} />
      </View>
    </SafeAreaView>
  );
}
