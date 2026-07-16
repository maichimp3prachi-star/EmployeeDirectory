import { StyleSheet } from "react-native";

export const statisticCardStyles = StyleSheet.create({
  card: {
    width: "31%",
    aspectRatio: 1,

    backgroundColor: "#fff",

    borderRadius: 15,

    justifyContent: "center",

    alignItems: "center",

    padding: 8,

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  number: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },

  title: {
    marginTop: 8,
    textAlign: "center",
    fontSize: 12,
    color: "#444",
  },
});
