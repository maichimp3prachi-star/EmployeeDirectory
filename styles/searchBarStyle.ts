import { StyleSheet } from "react-native";

export const searchBarStyles = StyleSheet.create({
  container: {
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 50,
  },

  icon: {
    marginRight: 10,
  },

  searchBox: {
    flex: 1,
    fontSize: 14,
    color: "gray",
  },
});
