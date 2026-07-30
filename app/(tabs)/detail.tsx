import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import LogoutButton from "../../components/common/LogoutButton";
import EmployeeCard from "../../components/employee/EmployeeCard";
import { useEmployee } from "../../context/EmployeeContext";
import { detailStyles } from "../../styles/detailScreenStyle";

export default function DetailScreen() {
  // Get employees from Context
  const { employees, deleteEmployee } = useEmployee();

  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");

  const toggleDetails = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredEmployees = employees.filter((employee) => {
    const search = searchText.toLowerCase();

    return (
      employee.name.toLowerCase().includes(search) ||
      employee.department.toLowerCase().includes(search) ||
      employee.designation.toLowerCase().includes(search)
    );
  });

  return (
    <SafeAreaView style={detailStyles.container}>
      {/* Header */}
      <View style={detailStyles.header}>
        <View>
          <Text style={detailStyles.heading}>Employee Directory</Text>

          <Text style={detailStyles.subHeading}>
            Manage all employees from one place
          </Text>
        </View>

        <Ionicons name="people-circle" size={55} color="#2563EB" />
      </View>

      {/* Search */}
      <View style={detailStyles.searchContainer}>
        <Ionicons name="search" size={22} color="#999" />

        <TextInput
          placeholder="Search employee..."
          placeholderTextColor="#999"
          style={detailStyles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Add Employee Button */}
      <TouchableOpacity
        style={detailStyles.addButton}
        onPress={() => router.push("/add-employee")}
      >
        <Ionicons name="person-add" size={20} color="white" />

        <Text style={detailStyles.addButtonText}>Add Employee</Text>
      </TouchableOpacity>

      {/* Employee List */}
      <FlatList
        data={filteredEmployees}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 120,
        }}
        renderItem={({ item }) => (
          <EmployeeCard
            employee={item}
            expanded={expandedId === item.id}
            onToggle={() => toggleDetails(item.id)}
            onDelete={() => deleteEmployee(item.id)}
            onEdit={() =>
              router.push({
                pathname: "/employee-details",
                params: {
                  id: item.id,
                },
              })
            }
          />
        )}
        ListEmptyComponent={
          <View style={detailStyles.emptyContainer}>
            <Ionicons name="people-outline" size={60} color="#BDBDBD" />

            <Text style={detailStyles.emptyText}>No Employee Found</Text>
          </View>
        }
      />

      <LogoutButton />
    </SafeAreaView>
  );
}
