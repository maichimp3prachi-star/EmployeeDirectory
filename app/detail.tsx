import React, { useState } from "react";
import {
    FlatList,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

import employees from "../data/employeeJ.json"; // this is for json file

// import { employees } from "../data/employee"; // this is for ts file

export default function DetailScreen() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleDetails = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={employees}
        keyExtractor={(item) => item.id}
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
});
