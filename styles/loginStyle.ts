import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    justifyContent: "center",
    paddingHorizontal: 25,
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 35,
  },

  logo: {
    width: 90,
    height: 90,
    marginBottom: 15,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#222",
  },

  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: "#666",
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 14,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 16,
  },

  roleTitle: {
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 12,
  },

  roleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  roleButton: {
    width: "48%",
    paddingVertical: 15,
    borderRadius: 12,
    backgroundColor: "#E8E8E8",
    alignItems: "center",
  },

  selectedRole: {
    backgroundColor: "#FFD54F",
    borderWidth: 2,
    borderColor: "#F9A825",
  },

  roleText: {
    fontSize: 16,
    fontWeight: "600",
  },

  loginButton: {
    backgroundColor: "#FFC107",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  loginText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
  },
});
