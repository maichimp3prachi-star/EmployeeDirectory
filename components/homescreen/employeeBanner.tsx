import { Image, Pressable, Text, View } from "react-native";
import { employeeBannerStyles } from "../../styles/employeeBannerStyle";

const bannerImage = require("../../assets/images/banner.png");

export default function EmployeeBanner() {
  return (
    <View style={employeeBannerStyles.container}>
      {/* Left Side */}
      <View style={employeeBannerStyles.leftSection}>
        <Text style={employeeBannerStyles.title}>Employee Directory</Text>

        <Text style={employeeBannerStyles.subtitle}>
          Browse and explore all employees in the organization.
        </Text>

        <Pressable style={employeeBannerStyles.button}>
          <Text style={employeeBannerStyles.buttonText}>View Employees →</Text>
        </Pressable>
      </View>

      {/* Right Side */}

      <Image source={bannerImage} style={employeeBannerStyles.image} />
    </View>
  );
}
