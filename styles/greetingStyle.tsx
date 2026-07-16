import { StyleSheet } from "react-native";

export const greetingStyles = StyleSheet.create({
  header: {
    marginTop: 10,
  },

  greeting: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },

  subtitle: {
    fontSize: 14,
    color: "#b0b0b0",
    marginTop: 8,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
});
