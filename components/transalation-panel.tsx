import { MaterialIcons } from "@expo/vector-icons"
import { Pressable, Text, View } from "react-native"

export default function TranslationPanel() {
    return (
        <View className="mb-6 bg-backgroundDark border border-white/10 rounded-2xl">
            <View className="glass-panel rounded-2xl p-5 border-l-[6px] border-l-secondary flex flex-col gap-2 shadow-2xl relative overflow-hidden">
                <View className="flex flex-row justify-between items-start relative z-10">
                    <View className="flex flex-col gap-1">
                        <Text className="text-[#9d9db9] text-base font-medium">Original: 止まれ</Text>
                        <Text className="text-white text-4xl font-black tracking-tight leading-tight">STOP</Text>
                    </View>
                    <Pressable accessibilityLabel="Read Aloud" className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-lg">
                        <MaterialIcons name="volume-up" size={28} color="#fff" />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}