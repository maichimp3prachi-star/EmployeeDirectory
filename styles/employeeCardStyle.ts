import { StyleSheet } from "react-native";

export const employeeCardStyles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 5,
  },

  topSection: {
    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    width: 75,
    height: 75,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#E5E7EB",
  },

  infoSection: {
    flex: 1,
    marginLeft: 16,
  },

  name: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  designation: {
    fontSize: 15,
    color: "#6B7280",
    marginTop: 4,
  },

  departmentBadge: {
    alignSelf: "flex-start",
    marginTop: 10,

    backgroundColor: "#DBEAFE",

    paddingHorizontal: 12,
    paddingVertical: 5,

    borderRadius: 20,
  },

  departmentText: {
    color: "#2563EB",
    fontWeight: "700",
    fontSize: 13,
  },

  viewButton: {
    marginTop: 18,

    backgroundColor: "#2563EB",

    height: 45,

    borderRadius: 12,

    justifyContent: "center",

    alignItems: "center",

    flexDirection: "row",
  },

  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 15,
    marginLeft: 8,
  },

  divider: {
    marginVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },

  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  detailText: {
    marginLeft: 10,
    color: "#374151",
    fontSize: 15,
  },

  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  editButton: {
    flex: 1,

    flexDirection: "row",

    justifyContent: "center",

    alignItems: "center",

    backgroundColor: "#F59E0B",

    paddingVertical: 12,

    borderRadius: 10,

    marginRight: 8,
  },

  deleteButton: {
    flex: 1,

    flexDirection: "row",

    justifyContent: "center",

    alignItems: "center",

    backgroundColor: "#EF4444",

    paddingVertical: 12,

    borderRadius: 10,

    marginLeft: 8,
  },

  actionText: {
    color: "white",
    fontWeight: "700",
    marginLeft: 6,
    fontSize: 15,
  },
});
