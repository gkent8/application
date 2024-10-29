import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles/styles";
import avatar from "./assets/avatar.jpg";
import {
  Text,
  SafeAreaView,
  TextInput,
  Button,
  View,
  Image,
  Pressable,
} from "react-native";

export default function ProfileScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigateToWelcome = () => {
    navigation.navigate("Welcome");
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const storedUsername = await AsyncStorage.getItem("username");
      console.log("storedUsername", storedUsername);
      const storedFirstName = await AsyncStorage.getItem("firstName");
      console.log("storedFirstName", storedFirstName);
      const storedLastName = await AsyncStorage.getItem("lastName");
      console.log("storedLastName", storedLastName);
      setUsername(storedUsername); // Store the username from the response
      setFirstName(storedFirstName);
      setLastName(storedLastName);
    };

    fetchUserData(); // Fetch the user data when component mounts
  }, []);

  const UpdateUserData = async () => {
    await AsyncStorage.setItem("username", username);
    await AsyncStorage.setItem("firstName", firstName);
    console.log("firstName", firstName);
    console.log("storedFirstName", await AsyncStorage.getItem("firstName"));
    await AsyncStorage.setItem("lastName", lastName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Profile Screen</Text>
      <Image
        style={styles.img}
        source={avatar} // Use the imported local image
        //style={styles.profileImage} // Reference to styles for image size and shape
      />
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setLastName(text)}
        value={lastName}
      />
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={UpdateUserData}>
          <Text style={styles.description}> Update </Text>
        </Pressable>

        <Pressable style={styles.button} onPress={navigateToWelcome}>
          <Text style={styles.description}> Go to Welcome Screen </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
