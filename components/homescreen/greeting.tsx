import { Image, Text, View } from "react-native";
import { greetingStyles } from "../../styles/greetingStyle";
const companyLogo = require("../../assets/images/company-logo.jpeg");

interface GreetingProps {
  name: string;
}

export default function Greeting({ name }: GreetingProps) {
  return (
    <View style={greetingStyles.header}>
      <View style={greetingStyles.headerRow}>
        <View>
          <Text style={greetingStyles.greeting}>Hello, {name} 👋</Text>

          <Text style={greetingStyles.subtitle}>
            Welcome to Employee Directory
          </Text>
        </View>

        <Image source={companyLogo} style={greetingStyles.logo} />
      </View>
    </View>
  );
}
