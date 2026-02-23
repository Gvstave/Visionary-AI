import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function Header() {
  return (
    <View className="bg-backgroundDark mt-8 flex flex-row justify-between w-full pointer-events-auto glass-panel rounded-full px-8 py-6 items-center shadow-lg max-w-[90%] mx-auto">
      <View className="flex flex-row items-center gap-1">
        <MaterialIcons name="translate" size={20} color="#fff" />
        <Text className="text-white text-sm font-bold tracking-wide">
          Translation • ES → EN
        </Text>
      </View>
      <View className="w-px h-4 bg-white/20"></View>
      <View className="flex flex-row items-center gap-1">
        <MaterialIcons name="battery-full" size={18} color="#34d399" />
        <Text className="text-xs font-mono font-bold text-green-400">100%</Text>
      </View>
    </View>
  );
}
