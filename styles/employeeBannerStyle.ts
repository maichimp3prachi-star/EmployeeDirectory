import { StyleSheet } from "react-native";

export const employeeBannerStyles = StyleSheet.create({
  container: {
    backgroundColor: "#276de4",

    borderRadius: 20,

    marginTop: 30,

    padding: 20,

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",
  },

  leftSection: {
    flex: 1,
  },

  title: {
    fontSize: 28,

    fontWeight: "bold",

    color: "#fff",

    marginBottom: 10,
  },

  subtitle: {
    fontSize: 17,

    color: "#fff",

    lineHeight: 25,

    marginBottom: 20,
  },

  button: {
    backgroundColor: "#fff",

    paddingVertical: 12,

    paddingHorizontal: 20,

    borderRadius: 12,

    alignSelf: "flex-start",
  },

  buttonText: {
    fontSize: 17,

    fontWeight: "600",

    color: "#1E63F4",
  },

  image: {
    width: 120,

    height: 120,

    resizeMode: "contain",

    marginLeft: 15,
  },
});
