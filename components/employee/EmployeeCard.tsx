import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, Text, View } from "react-native";

import { employeeCardStyles } from "../../styles/employeeCardStyle";

interface Employee {
  id: string;
  name: string;
  designation: string;
  department: string;
  email: string;
  phone: string;
  experience: string;
  image: string;
}

interface EmployeeCardProps {
  employee: Employee;
  expanded: boolean;
  onToggle: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export default function EmployeeCard({
  employee,
  expanded,
  onToggle,
  onEdit,
  onDelete,
}: EmployeeCardProps) {
  return (
    <View style={employeeCardStyles.card}>
      {/* ================= HEADER ================= */}

      <View style={employeeCardStyles.topSection}>
        <Image
          source={{ uri: employee.image }}
          style={employeeCardStyles.image}
        />

        <View style={employeeCardStyles.infoSection}>
          <Text style={employeeCardStyles.name}>{employee.name}</Text>

          <Text style={employeeCardStyles.designation}>
            {employee.designation}
          </Text>

          <View style={employeeCardStyles.departmentBadge}>
            <Text style={employeeCardStyles.departmentText}>
              {employee.department}
            </Text>
          </View>
        </View>
      </View>

      {/* ================= VIEW DETAILS BUTTON ================= */}

      <Pressable style={employeeCardStyles.viewButton} onPress={onToggle}>
        <Ionicons
          name={expanded ? "chevron-up" : "chevron-down"}
          size={18}
          color="white"
        />

        <Text style={employeeCardStyles.buttonText}>
          {expanded ? "Hide Details" : "View Details"}
        </Text>
      </Pressable>

      {/* ================= EXPANDED CONTENT ================= */}

      {expanded && (
        <>
          <View style={employeeCardStyles.divider} />

          <View style={employeeCardStyles.detailRow}>
            <Ionicons name="mail-outline" size={18} color="#2563EB" />

            <Text style={employeeCardStyles.detailText}>{employee.email}</Text>
          </View>

          <View style={employeeCardStyles.detailRow}>
            <Ionicons name="call-outline" size={18} color="#16A34A" />

            <Text style={employeeCardStyles.detailText}>{employee.phone}</Text>
          </View>

          <View style={employeeCardStyles.detailRow}>
            <Ionicons name="briefcase-outline" size={18} color="#F59E0B" />

            <Text style={employeeCardStyles.detailText}>
              {employee.experience}
            </Text>
          </View>

          {/* ================= ACTION BUTTONS ================= */}

          <View style={employeeCardStyles.actionContainer}>
            <Pressable style={employeeCardStyles.editButton} onPress={onEdit}>
              <Ionicons name="create-outline" size={18} color="white" />

              <Text style={employeeCardStyles.actionText}>Edit</Text>
            </Pressable>

            <Pressable
              style={employeeCardStyles.deleteButton}
              onPress={onDelete}
            >
              <Ionicons name="trash-outline" size={18} color="white" />

              <Text style={employeeCardStyles.actionText}>Delete</Text>
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
}
