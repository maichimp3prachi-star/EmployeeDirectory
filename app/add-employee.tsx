import React, { useState } from "react";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

import { useEmployee } from "../context/EmployeeContext";

export default function AddEmployee() {
  const { addEmployee } = useEmployee();

  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState("");

  const handleSave = () => {
    // Validation
    if (
      !name.trim() ||
      !designation.trim() ||
      !department.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !experience.trim()
    ) {
      Alert.alert("Validation", "Please fill all fields.");
      return;
    }

    const newEmployee = {
      id: Date.now().toString(),
      name: name.trim(),
      designation: designation.trim(),
      department: department.trim(),
      email: email.trim(),
      phone: phone.trim(),
      experience: experience.trim(),
      image: "https://i.pravatar.cc/150?img=12",
    };

    console.log("Adding Employee...");
    console.log(newEmployee);

    addEmployee(newEmployee);

    Alert.alert("Success", "Employee added successfully!");

    router.back();
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.heading}>Add Employee</Text>

      <Text style={styles.subHeading}>Fill all employee details</Text>

      {/* Name */}

      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={20} color="#2563EB" />

        <TextInput
          placeholder="Employee Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
      </View>

      {/* Designation */}

      <View style={styles.inputContainer}>
        <Ionicons name="briefcase-outline" size={20} color="#2563EB" />

        <TextInput
          placeholder="Designation"
          value={designation}
          onChangeText={setDesignation}
          style={styles.input}
        />
      </View>

      {/* Department */}

      <View style={styles.inputContainer}>
        <Ionicons name="business-outline" size={20} color="#2563EB" />

        <TextInput
          placeholder="Department"
          value={department}
          onChangeText={setDepartment}
          style={styles.input}
        />
      </View>

      {/* Email */}

      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#2563EB" />

        <TextInput
          placeholder="Email Address"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
      </View>

      {/* Phone */}

      <View style={styles.inputContainer}>
        <Ionicons name="call-outline" size={20} color="#2563EB" />

        <TextInput
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
        />
      </View>

      {/* Experience */}

      <View style={styles.inputContainer}>
        <Ionicons name="star-outline" size={20} color="#2563EB" />

        <TextInput
          placeholder="Experience"
          value={experience}
          onChangeText={setExperience}
          style={styles.input}
        />
      </View>

      {/* Save Button */}

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Ionicons name="person-add" size={22} color="#fff" />

        <Text style={styles.buttonText}>Save Employee</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    padding: 20,
  },

  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2563EB",
    marginTop: 20,
  },

  subHeading: {
    fontSize: 16,
    color: "#666",
    marginBottom: 25,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    height: 55,
    elevation: 2,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#2563EB",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 55,
    borderRadius: 12,
    marginTop: 20,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 10,
  },
});
