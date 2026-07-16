import { View } from "react-native";
import Greeting from "../../components/homescreen/greeting";
import SearchBar from "../../components/homescreen/searchBar";
import { homeStyles } from "../../styles/homeScreenStyle";

const employeeName = "Prachi";

export default function HomeScreen() {
  return (
    <View style={homeStyles.container}>
      <Greeting name={employeeName} />
      <SearchBar />
    </View>
  );
}
