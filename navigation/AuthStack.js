import React, { useContext, useState } from "react";
import { View,Button, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppContext } from "../context/AppContext";
import Icon from "react-native-vector-icons/FontAwesome";


const SignInScreen = ({ navigation }) => {
    const { setIsLoggedIn } = useContext(AppContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>
  
        <Text style={styles.label}>Email ID</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email here!"
          value={email}
          onChangeText={setEmail}
        />
  
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password here!"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
       <View style={{ width: "100%", alignItems: "flex-end" }}>
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={styles.forgotPassword}>For got password?</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.signInButton} onPress={() => setIsLoggedIn(true)}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
        </View>
  
        <Text style={styles.orText}>Or sign in with</Text>
  
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Icon name="google" size={20} color="red" style={styles.icon} />
            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
            <Icon name="facebook" size={20} color="white" style={styles.icon} />
            <Text style={styles.socialText}>Facebook</Text>
          </TouchableOpacity>
        </View>
  
        <Text style={styles.signUpText}>
          Not yet a member?{" "}
          <Text style={styles.signUpLink} onPress={() => navigation.navigate("SignUp")}>
            Sign Up
          </Text>
        </Text>
      </View>
    );
  };

const SignUpScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Sign Up</Text>
    <Button title="Go to Sign In" onPress={() => navigation.navigate("SignIn")} />
  </View>
);

const ForgotPasswordScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Forgot Password</Text>
    <Button title="Go to Sign In" onPress={() => navigation.navigate("SignIn")} />
  </View>
);

const Stack = createNativeStackNavigator();

export const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SignIn" component={SignInScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
    },
    label: {
      alignSelf: "flex-start",
      fontSize: 14,
      fontWeight: "bold",
      marginTop: 10,
    },
    input: {
      width: "100%",
      height: 45,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      paddingHorizontal: 10,
      marginTop: 5,
    },
    forgotPassword: {
      alignSelf: "flex-end",
      color: "orange",
      marginTop: 5,
      fontWeight: "bold"
    },
    signInButton: {
      width: "100%",
      height: 45,
      backgroundColor: "orange",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      marginTop: 20,
    },
    signInText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
    orText: {
      marginVertical: 15,
      fontSize: 14,
      color: "black",
      fontWeight: "bold",
    },

    icon: {
        marginRight: 10,
      },
      
    socialContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
    },
    socialButton: {
        flex: 1,
        flexDirection: "row", // Hiển thị icon + text cùng hàng
        alignItems: "center",
        justifyContent: "center",
        height: 45,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        marginHorizontal: 5,
    },
    facebookButton: {
      backgroundColor: "#3b5998",
    },
    socialText: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#000",
    },
    signUpText: {
      marginTop: 15,
      fontSize: 14,
      color: "#666",
    },
    signUpLink: {
      color: "orange",
      fontWeight: "bold",
    },
  });