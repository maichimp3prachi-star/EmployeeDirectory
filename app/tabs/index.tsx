import { View } from "react-native";
import Greeting from "../../components/homescreen/greeting";
import { homeStyles } from "../../styles/homeScreenStyle";

const employeeName = "Jenny";

export default function HomeScreen() {
  return (
    <View style={homeStyles.container}>
      <Greeting name={employeeName} />
    </View>
  );
}
