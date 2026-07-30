import AsyncStorage from "@react-native-async-storage/async-storage";

const USER_KEY = "loggedInUser";

export interface LoggedInUser {
  email: string;
  role: "admin" | "employee";
}

export const saveUser = async (user: LoggedInUser) => {
  try {
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async () => {
  try {
    const user = await AsyncStorage.getItem(USER_KEY);

    if (user) {
      return JSON.parse(user);
    }

    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const logoutUser = async () => {
  try {
    await AsyncStorage.removeItem(USER_KEY);
  } catch (error) {
    console.log(error);
  }
};
