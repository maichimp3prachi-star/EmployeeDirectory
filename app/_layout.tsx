import { Stack } from "expo-router";

import { AttendanceProvider } from "../context/AttendanceContext";
import { EmployeeProvider } from "../context/EmployeeContext";

export default function RootLayout() {
  return (
    <EmployeeProvider>
      <AttendanceProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />

          <Stack.Screen name="(auth)" />

          <Stack.Screen name="(tabs)" />

          <Stack.Screen name="add-employee" />

          <Stack.Screen name="employee-details" />

          <Stack.Screen name="employee-home" />

          <Stack.Screen name="attendance" />
        </Stack>
      </AttendanceProvider>
    </EmployeeProvider>
  );
}
