import { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";

import { router } from "expo-router";

import { loginStyles } from "../../styles/loginStyle";

const companyLogo = require("../../assets/images/logo.jpeg");

export default function LoginScreen() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [role, setRole] = useState<"admin" | "employee">("employee");

  const handleLogin = () => {
    console.log("Email :", email);
    console.log("Password :", password);
    console.log("Role :", role);

    if (role === "admin") {
      router.replace("/(tabs)");
    } else {
      // router.replace("/(tabs)");
    }
  };

  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.logoContainer}>
        <Image source={companyLogo} style={loginStyles.logo} />

        <Text style={loginStyles.title}>Employee Management</Text>

        <Text style={loginStyles.subtitle}>Login to continue</Text>
      </View>

      <TextInput
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        style={loginStyles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        style={loginStyles.input}
        secureTextEntry
      />

      <Text style={loginStyles.roleTitle}>Select Role</Text>

      <View style={loginStyles.roleContainer}>
        <Pressable
          style={[
            loginStyles.roleButton,
            role === "admin" && loginStyles.selectedRole,
          ]}
          onPress={() => setRole("admin")}
        >
          <Text style={loginStyles.roleText}>Admin</Text>
        </Pressable>

        <Pressable
          style={[
            loginStyles.roleButton,
            role === "employee" && loginStyles.selectedRole,
          ]}
          onPress={() => setRole("employee")}
        >
          <Text style={loginStyles.roleText}>Employee</Text>
        </Pressable>
      </View>

      <Pressable style={loginStyles.loginButton} onPress={handleLogin}>
        <Text style={loginStyles.loginText}>LOGIN</Text>
      </Pressable>
    </View>
  );
}
