import { Text, View } from "react-native";

export default function EmployeeHomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5F7FA",
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
        }}
      >
        👋 Welcome Employee
      </Text>

      <Text
        style={{
          marginTop: 15,
          fontSize: 18,
          color: "gray",
        }}
      >
        This is Employee Dashboard
      </Text>
    </View>
  );
}
