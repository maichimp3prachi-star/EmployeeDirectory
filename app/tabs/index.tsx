import { View } from "react-native";

import EmployeeBanner from "../../components/homescreen/employeeBanner";
import Greeting from "../../components/homescreen/greeting";
import SearchBar from "../../components/homescreen/searchBar";
import StatisticCard from "../../components/homescreen/statisticCard";

import { homeStyles } from "../../styles/homeScreenStyle";

const employeeName = "Prachi";

export default function HomeScreen() {
  return (
    <View style={homeStyles.container}>
      <Greeting name={employeeName} />

      <SearchBar />

      <View style={homeStyles.statisticsContainer}>
        <StatisticCard
          icon="people"
          number={12}
          title="Total Employees"
          color="#2979FF"
          backgroundColor="#E3F2FD"
        />

        <StatisticCard
          icon="business"
          number={5}
          title="Departments"
          color="#4CAF50"
          backgroundColor="#E8F5E9"
        />

        <StatisticCard
          icon="briefcase"
          number={7}
          title="Experienced"
          color="#8E44AD"
          backgroundColor="#F3E5F5"
        />
      </View>

      <EmployeeBanner />
    </View>
  );
}
