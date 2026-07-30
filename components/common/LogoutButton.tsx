import { router } from "expo-router";
import { Pressable, Text } from "react-native";

import { logoutUser } from "../../services/authService";

export default function LogoutButton() {
  const logout = async () => {
    await logoutUser();

    router.replace("/(auth)/login");
  };

  return (
    <Pressable
      onPress={logout}
      style={{
        backgroundColor: "red",
        padding: 12,
        borderRadius: 10,
        marginTop: 20,
      }}
    >
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Logout
      </Text>
    </Pressable>
  );
}
