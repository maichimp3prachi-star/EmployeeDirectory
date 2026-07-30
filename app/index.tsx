import { Redirect } from "expo-router";
import { useEffect, useState } from "react";

import { getUser } from "../services/authService";

export default function Index() {
  const [loading, setLoading] = useState(true);

  const [role, setRole] = useState("");

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const user = await getUser();

    if (user) {
      setRole(user.role);
    }

    setLoading(false);
  };

  if (loading) return null;

  if (role === "admin") {
    return <Redirect href="/(tabs)" />;
  }

  if (role === "employee") {
    return <Redirect href="/(employee)" />;
  }

  return <Redirect href="/(auth)/login" />;
}
