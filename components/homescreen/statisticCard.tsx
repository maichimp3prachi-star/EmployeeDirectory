import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { statisticCardStyles } from "../../styles/statisticCardStyle";

interface StatisticCardProps {
  icon: keyof typeof Ionicons.glyphMap;
  number: number;
  title: string;
  color: string;
  backgroundColor: string;
}

export default function StatisticCard({
  icon,
  number,
  title,
  color,
  backgroundColor,
}: StatisticCardProps) {
  return (
    <View
      style={[statisticCardStyles.card, { backgroundColor: backgroundColor }]}
    >
      <Ionicons name={icon} size={25} color={color} />

      <Text style={[statisticCardStyles.number, { color: color }]}>
        {number}
      </Text>

      <Text style={statisticCardStyles.title}>{title}</Text>
    </View>
  );
}
