import React, { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import employees from "../../data/employeeJ.json";

export default function DetailScreen() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");

  const toggleDetails = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  // Filter employees based on search text
  const filteredEmployees = employees.filter((employee) => {
    const search = searchText.toLowerCase();

    return (
      employee.name.toLowerCase().includes(search) ||
      employee.designation.toLowerCase().includes(search) ||
      employee.department.toLowerCase().includes(search)
    );
  });

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search employee..."
        placeholderTextColor="#888"
        value={searchText}
        onChangeText={setSearchText}
      />

      <FlatList
        data={filteredEmployees}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const isExpanded = expandedId === item.id;

          return (
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />

              <Text style={styles.name}>{item.name}</Text>

              <Text style={styles.info}>Designation: {item.designation}</Text>

              <Text style={styles.info}>Department: {item.department}</Text>

              <Pressable
                style={styles.button}
                onPress={() => toggleDetails(item.id)}
              >
                <Text style={styles.buttonText}>
                  {isExpanded ? "Hide Details" : "View Details"}
                </Text>
              </Pressable>

              {isExpanded && (
                <View style={styles.detailsContainer}>
                  <Text style={styles.detailText}>📧 Email: {item.email}</Text>

                  <Text style={styles.detailText}>📱 Phone: {item.phone}</Text>

                  <Text style={styles.detailText}>
                    💼 Experience: {item.experience}
                  </Text>
                </View>
              )}
            </View>
          );
        }}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No employee found.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    padding: 15,
  },

  searchInput: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 15,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
  },

  info: {
    fontSize: 16,
    color: "#555",
    marginTop: 2,
  },

  button: {
    marginTop: 12,
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  detailsContainer: {
    marginTop: 15,
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingTop: 10,
  },

  detailText: {
    fontSize: 15,
    marginVertical: 3,
    color: "#333",
  },

  emptyText: {
    color: "#fff",
    textAlign: "center",
    marginTop: 30,
    fontSize: 18,
  },
});
