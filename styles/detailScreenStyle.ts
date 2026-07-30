import { StyleSheet } from "react-native";

export const detailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
    paddingHorizontal: 18,
    paddingTop: 20,
  },

  /* ================= HEADER ================= */

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: 25,
  },

  heading: {
    fontSize: 30,
    fontWeight: "700",
    color: "#1E3A8A",
  },

  subHeading: {
    fontSize: 15,
    color: "#6B7280",
    marginTop: 4,
  },

  /* ================= SEARCH ================= */

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#FFFFFF",

    borderRadius: 15,

    paddingHorizontal: 15,

    height: 55,

    marginBottom: 18,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 3,
  },

  searchInput: {
    flex: 1,

    marginLeft: 10,

    fontSize: 16,

    color: "#111827",
  },

  /* ================= ADD BUTTON ================= */

  addButton: {
    backgroundColor: "#2563EB",

    height: 50,

    borderRadius: 14,

    justifyContent: "center",

    alignItems: "center",

    flexDirection: "row",

    marginBottom: 20,
  },

  addButtonText: {
    color: "#FFFFFF",

    fontWeight: "700",

    fontSize: 16,

    marginLeft: 8,
  },

  /* ================= EMPTY ================= */

  emptyContainer: {
    alignItems: "center",

    justifyContent: "center",

    marginTop: 80,
  },

  emptyText: {
    marginTop: 12,

    fontSize: 18,

    color: "#9CA3AF",

    fontWeight: "600",
  },
});
