import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

export default function HeaderSettings() {
    return (
        <View className="bg-backgroundDark border-b border-white/5 pt-12 pb-4 px-6">
            <View className="flex items-center justify-between">
                <Pressable accessibilityLabel="Go back" className="p-3 rounded-full flex items-center justify-center">
                    <MaterialIcons name="arrow-back" size={32} color="#ffffff" />
                </Pressable>
                <Text className="text-white text-2xl font-bold tracking-wide flex-1 text-center pr-12">Settings</Text>
            </View>
        </View>
    )
}