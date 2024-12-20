import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  View,
  Pressable,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles/styles";
import IPAddress from "./IpAddress";

export default function LoginScreen({ navigation, setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");

  const handlePress = async () => {
    if (isLogin) {
      if (email === "" || password === "") {
        setMessage("Please fill out all fields.");
        return;
      }
    } else {
      if (
        email === "" ||
        password === "" ||
        firstName === "" ||
        lastName === ""
      ) {
        setMessage("Please fill out all fields.");
        return;
      }
    }

    const url = isLogin
      ? `http://${IPAddress()}:5000/users/login`
      : `http://${IPAddress()}:5000/users/register`;

    const body = isLogin
      ? { username: email, password }
      : { username: email, password, firstname: firstName, lastname: lastName };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const result = await response.json();
      if (response.ok) {
        if (isLogin) {
          setMessage("Login successful");
          if (result.token) {
            // Save token and update login state
            //console.log("Received token:", result.token);
            console.log("username:", result);
            await AsyncStorage.setItem("token", result.token);
            await AsyncStorage.setItem("username", result.username);
            await AsyncStorage.setItem("firstName", result.firstname);
            await AsyncStorage.setItem("lastName", result.lastname);
            const storedToken = await AsyncStorage.getItem("token");
            console.log("Stored token:", storedToken);
            setIsLoggedIn(true);
            navigation.reset({
              index: 0,
              routes: [{ name: "Welcome" }],
            });
          }
        } else {
          setMessage("Registration successful. Please log in.");
          setIsLogin(true); // Switch to login view
        }
      } else {
        setMessage(result.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error connecting to the server.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headerText}>{isLogin ? "Login" : "Sign Up"}</Text>

        {!isLogin && (
          <>
            <TextInput
              style={styles.input}
              placeholder="Enter first name"
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter last name"
              value={lastName}
              onChangeText={(text) => setLastName(text)}
            />
          </>
        )}

        <TextInput
          style={styles.input}
          placeholder="Enter email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <View>
          <View style={loginStyles.loginButtonContainer}>
            <View>
              <Pressable style={styles.button} onPress={handlePress}>
                <Text style={styles.description}>
                  {isLogin ? "Login" : "Sign Up"}
                </Text>
              </Pressable>
            </View>
            <View>
              <Pressable
                style={styles.button}
                onPress={() => setIsLogin(!isLogin)}
              >
                <Text style={styles.description}>
                  {isLogin ? "Switch to Sign Up" : "Switch to Login"}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>

        {message ? <Text style={styles.message}>{message}</Text> : null}
      </View>
    </SafeAreaView>
  );
}

const loginStyles = StyleSheet.create({
  loginButtonContainer: {
    margin: 10,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
