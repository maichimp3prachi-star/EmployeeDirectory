import { router } from "expo-router";
import { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import { saveUser } from "../../services/authService";

import { loginStyles } from "../../styles/loginStyle";

const companyLogo = require("../../assets/images/logo.jpeg");

const USERS = {
  admin: {
    email: "adminED@ymail.com",
    password: "12345",
  },

  employee: {
    email: "employeeED@yopmail.com",
    password: "12345",
  },
};

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"admin" | "employee">("employee");

  // Error message shown on screen
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    const enteredEmail = email.trim();

    // Email validation
    if (enteredEmail === "") {
      setError("Email is required.");
      return;
    }

    // Password validation
    if (password === "") {
      setError("Password is required.");
      return;
    }

    // ==========================
    // ADMIN LOGIN
    // ==========================

    if (role === "admin") {
      if (
        enteredEmail === USERS.admin.email &&
        password === USERS.admin.password
      ) {
        console.log("Admin Login Success");

        await saveUser({
          email: enteredEmail,
          role: "admin",
        });

        router.replace("/(tabs)");

        return;
      } else {
        setError("Invalid Admin Email or Password.");
        return;
      }
    }

    // ==========================
    // EMPLOYEE LOGIN
    // ==========================

    if (role === "employee") {
      if (
        enteredEmail === USERS.employee.email &&
        password === USERS.employee.password
      ) {
        console.log("Employee Login Success");

        await saveUser({
          email: enteredEmail,
          role: "employee",
        });

        router.replace("/(employee)");

        return;
      } else {
        setError("Invalid Employee Email or Password.");
        return;
      }
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
        onChangeText={(text) => {
          setEmail(text);
          setError("");
        }}
        style={loginStyles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Enter Password"
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          setError("");
        }}
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
          onPress={() => {
            setRole("admin");
            setError("");
          }}
        >
          <Text style={loginStyles.roleText}>Admin</Text>
        </Pressable>

        <Pressable
          style={[
            loginStyles.roleButton,
            role === "employee" && loginStyles.selectedRole,
          ]}
          onPress={() => {
            setRole("employee");
            setError("");
          }}
        >
          <Text style={loginStyles.roleText}>Employee</Text>
        </Pressable>
      </View>

      {/* Error Message */}

      {error !== "" && (
        <Text
          style={{
            color: "red",
            marginTop: 15,
            fontSize: 15,
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          {error}
        </Text>
      )}

      <Pressable style={loginStyles.loginButton} onPress={handleLogin}>
        <Text style={loginStyles.loginText}>LOGIN</Text>
      </Pressable>
    </View>
  );
}
