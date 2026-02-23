import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

type ArBoundBoxProps = {
  label?: string;
  iconName?: keyof typeof MaterialIcons.glyphMap;
};

export default function ArBoundBox({
  label = "Sign Detected",
  iconName = "view-in-ar",
}: ArBoundBoxProps) {
  return (
    <View className="absolute top-[35%] left-1/2 -translate-x-1/2 w-48 h-48 border-[3px] border-primary rounded-xl neon-box flex flex-col justify-between p-2 z-0 opacity-90">
      <Text className="self-start bg-primary text-white text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider">
        {label}
      </Text>
      <View className="self-end animate-pulse">
        <MaterialIcons name={iconName} size={24} color="#fff" />
      </View>
    </View>
  );
}
