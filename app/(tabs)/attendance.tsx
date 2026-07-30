import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { useAttendance } from "../../context/AttendanceContext";
import { useEmployee } from "../../context/EmployeeContext";

export default function AttendanceScreen() {
  const { employees } = useEmployee();

  const { attendance, markAttendance } = useAttendance();

  const today = new Date().toISOString().split("T")[0];

  const getStatus = (employeeId: string) => {
    const record = attendance.find(
      (item) => item.employeeId === employeeId && item.date === today,
    );

    return record?.status ?? "Not Marked";
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Attendance</Text>

      <Text style={styles.date}>Today's Date</Text>

      <Text style={styles.today}>{today}</Text>

      <FlatList
        data={employees}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
        renderItem={({ item }) => {
          const status = getStatus(item.id);

          return (
            <View style={styles.card}>
              <View style={styles.top}>
                <Ionicons name="person-circle" size={55} color="#2563EB" />

                <View style={{ flex: 1 }}>
                  <Text style={styles.name}>{item.name}</Text>

                  <Text style={styles.designation}>{item.designation}</Text>

                  <Text style={styles.department}>{item.department}</Text>
                </View>
              </View>

              <View style={styles.statusContainer}>
                <Text style={styles.statusTitle}>Status :</Text>

                <Text
                  style={[
                    styles.status,
                    {
                      color:
                        status === "Present"
                          ? "green"
                          : status === "Absent"
                            ? "red"
                            : "#666",
                    },
                  ]}
                >
                  {status}
                </Text>
              </View>

              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={styles.presentButton}
                  onPress={() => markAttendance(item.id, today, "Present")}
                >
                  <Ionicons name="checkmark-circle" color="white" size={18} />

                  <Text style={styles.buttonText}>Present</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.absentButton}
                  onPress={() => markAttendance(item.id, today, "Absent")}
                >
                  <Ionicons name="close-circle" color="white" size={18} />

                  <Text style={styles.buttonText}>Absent</Text>
                </TouchableOpacity>
              </View>
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
    backgroundColor: "#F4F7FC",
    padding: 18,
  },

  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1E3A8A",
    marginTop: 20,
  },

  date: {
    marginTop: 8,
    color: "#777",
    fontSize: 15,
  },

  today: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
    color: "#2563EB",
  },

  card: {
    backgroundColor: "white",
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
    elevation: 3,
  },

  top: {
    flexDirection: "row",
    alignItems: "center",
  },

  name: {
    fontSize: 19,
    fontWeight: "700",
  },

  designation: {
    color: "#666",
    marginTop: 2,
  },

  department: {
    color: "#999",
  },

  statusContainer: {
    flexDirection: "row",
    marginTop: 18,
  },

  statusTitle: {
    fontWeight: "700",
    fontSize: 16,
  },

  status: {
    marginLeft: 10,
    fontWeight: "700",
    fontSize: 16,
  },

  buttonRow: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
  },

  presentButton: {
    flex: 1,
    backgroundColor: "#16A34A",
    marginRight: 10,
    height: 46,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  absentButton: {
    flex: 1,
    backgroundColor: "#DC2626",
    height: 46,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  buttonText: {
    color: "white",
    marginLeft: 8,
    fontWeight: "700",
  },
});
