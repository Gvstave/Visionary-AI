import NavBar from "@/components/nav-bar";
import TranslationPanel from "@/components/transalation-panel";
import ArBoundBox from "@/components/ui/ar-bound-box";
import Header from "@/components/ui/Header";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-backgroundDark">
      <View className="bg-background-dark text-white font-display overflow-hidden h-screen w-full flex flex-col relative">
        <View className="absolute inset-0 z-0 w-full h-full bg-gray-900 overflow-hidden">
          <View className="absolute inset-0 bg-background-dark/20"></View>
          <View className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
            <View className="w-full h-[20%] bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 animate-[scan_4s_linear_infinite]"></View>
          </View>
          <ArBoundBox />
        </View>
        <View className="relative z-10 flex flex-col h-full pointer-events-none">
          <Header />
        </View>
        <View className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-background-dark via-background-dark/95 to-transparent pb-6 pt-20 pointer-events-none bg-backgroundDark">
          <View className="max-w-md mx-auto relative px-4 w-full pointer-events-auto">
            <TranslationPanel />
            <NavBar />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}