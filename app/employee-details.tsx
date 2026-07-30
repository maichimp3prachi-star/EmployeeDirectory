import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import { useEmployee } from "../context/EmployeeContext";

export default function EmployeeDetails() {
  const { id } = useLocalSearchParams();

  const { employees, updateEmployee } = useEmployee();

  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const employee = employees.find((item) => item.id === id);

    if (employee) {
      setName(employee.name);
      setDesignation(employee.designation);
      setDepartment(employee.department);
      setEmail(employee.email);
      setPhone(employee.phone);
      setExperience(employee.experience);
      setImage(employee.image);
    }
  }, [id]);

  const handleUpdate = () => {
    if (
      !name ||
      !designation ||
      !department ||
      !email ||
      !phone ||
      !experience
    ) {
      Alert.alert("Validation", "Please fill all fields.");
      return;
    }

    updateEmployee({
      id: id as string,
      name,
      designation,
      department,
      email,
      phone,
      experience,
      image,
    });

    Alert.alert("Success", "Employee Updated Successfully.");

    router.back();
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.heading}>Edit Employee</Text>

      <Text style={styles.subHeading}>Update employee information</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={20} color="#2563EB" />

        <TextInput
          style={styles.input}
          placeholder="Employee Name"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="briefcase-outline" size={20} color="#2563EB" />

        <TextInput
          style={styles.input}
          placeholder="Designation"
          value={designation}
          onChangeText={setDesignation}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="business-outline" size={20} color="#2563EB" />

        <TextInput
          style={styles.input}
          placeholder="Department"
          value={department}
          onChangeText={setDepartment}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#2563EB" />

        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="call-outline" size={20} color="#2563EB" />

        <TextInput
          style={styles.input}
          placeholder="Phone"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="star-outline" size={20} color="#2563EB" />

        <TextInput
          style={styles.input}
          placeholder="Experience"
          value={experience}
          onChangeText={setExperience}
        />
      </View>

      <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
        <Ionicons name="save-outline" color="white" size={22} />

        <Text style={styles.buttonText}>Update Employee</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 20,
  },

  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2563EB",
    marginTop: 20,
  },

  subHeading: {
    color: "#666",
    marginTop: 5,
    marginBottom: 25,
    fontSize: 15,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 18,
    elevation: 3,
    height: 58,
  },

  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
  },

  updateButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2563EB",
    borderRadius: 15,
    height: 58,
    marginTop: 25,
    marginBottom: 35,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
});
