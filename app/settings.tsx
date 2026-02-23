import HeaderSettings from "@/components/ui/header-settings"
import { MaterialIcons } from "@expo/vector-icons"
import { useState } from "react"
import { Pressable, Switch, Text, View } from "react-native"

export default function Settings() {
    const [cameraGuidance, setCameraGuidance] = useState(true)

    return (
        <View className="flex-1 bg-backgroundDark">
            <View className="relative flex-1 w-full max-w-md mx-auto">
                <HeaderSettings />
                <View className="flex-1 px-5 py-6 pb-32 gap-8">
                    <View>
                        <Text className="text-white text-3xl font-bold mb-5 px-1">Display</Text>
                        <View className="rounded-2xl p-6 mb-5 bg-surfaceDark border border-white/10">
                            <View className="flex items-center justify-between mb-4">
                                <Text className="text-white text-xl font-semibold">Text Size</Text>
                                <Text className="text-primary font-bold text-lg bg-primary/10 px-3 py-1 rounded-lg">120%</Text>
                            </View>
                            <View className="flex items-center gap-4">
                                <MaterialIcons name="text-fields" size={20} color="rgba(255,255,255,0.6)" />
                                <View className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                                    <View className="h-2 bg-primary rounded-full" style={{ width: "35%" }} />
                                </View>
                                <MaterialIcons name="text-fields" size={32} color="#ffffff" />
                            </View>
                            <View className="mt-4 p-4 bg-black/20 rounded-xl border border-white/5">
                                <Text className="text-white/90 text-lg">The quick brown fox jumps over the lazy dog.</Text>
                            </View>
                        </View>
                        <View className="rounded-2xl p-2 gap-2 bg-surfaceDark border border-white/10">
                            <Pressable className="flex-1 py-4 px-2 rounded-xl">
                                <Text className="text-white/60 font-medium text-center">Standard</Text>
                            </Pressable>
                            <Pressable className="flex-1 py-4 px-2 rounded-xl bg-primary border border-white/10">
                                <Text className="text-white font-bold text-center">High</Text>
                            </Pressable>
                            <Pressable className="flex-1 py-4 px-2 rounded-xl">
                                <Text className="text-white/60 font-medium text-center">Ultra</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View>
                        <Text className="text-white text-3xl font-bold mb-5 px-1 pt-2">Audio</Text>
                        <View className="rounded-2xl p-6 mb-5 bg-surfaceDark border border-white/10">
                            <View className="flex items-center justify-between mb-4">
                                <Text className="text-white text-xl font-semibold">Voice Speed</Text>
                                <Pressable accessibilityLabel="Play sample audio" className="size-12 bg-primary rounded-full flex items-center justify-center">
                                    <MaterialIcons name="play-arrow" size={28} color="#ffffff" />
                                </Pressable>
                            </View>
                            <View className="flex items-center gap-4">
                                <Text className="text-white/60 font-medium text-lg">Slow</Text>
                                <View className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                                    <View className="h-2 bg-primary rounded-full" style={{ width: "65%" }} />
                                </View>
                                <Text className="text-white font-bold text-lg">Fast</Text>
                            </View>
                        </View>
                        <Pressable className="w-full rounded-2xl p-6 bg-surfaceDark border border-white/10 flex items-center justify-between">
                            <View className="flex items-center gap-4">
                                <View className="size-12 rounded-full bg-white/10 flex items-center justify-center">
                                    <MaterialIcons name="language" size={28} color="#6764f2" />
                                </View>
                                <View>
                                    <Text className="text-white text-xl font-semibold">Language</Text>
                                    <Text className="text-white/60 text-base mt-1">English (US)</Text>
                                </View>
                            </View>
                            <MaterialIcons name="chevron-right" size={32} color="rgba(255,255,255,0.4)" />
                        </Pressable>
                    </View>
                    <View>
                        <Text className="text-white text-3xl font-bold mb-5 px-1 pt-2">Controls</Text>
                        <View className="gap-4">
                            <Pressable className="w-full rounded-2xl p-6 bg-surfaceDark border border-white/10 flex items-center justify-between">
                                <View className="flex items-center gap-4">
                                    <View className="size-12 rounded-full bg-white/10 flex items-center justify-center">
                                        <MaterialIcons name="vibration" size={28} color="#6764f2" />
                                    </View>
                                    <View>
                                        <Text className="text-white text-xl font-semibold">Haptics</Text>
                                        <Text className="text-white/60 text-base mt-1">Strong Intensity</Text>
                                    </View>
                                </View>
                                <MaterialIcons name="chevron-right" size={32} color="rgba(255,255,255,0.4)" />
                            </Pressable>
                            <View className="rounded-2xl p-5 pl-6 bg-surfaceDark border border-white/10 flex items-center justify-between">
                                <View className="flex items-center gap-4">
                                    <View className="size-12 rounded-full bg-white/10 flex items-center justify-center">
                                        <MaterialIcons name="videocam" size={28} color="#6764f2" />
                                    </View>
                                    <Text className="text-white text-xl font-semibold">Camera Guidance</Text>
                                </View>
                                <Switch
                                    value={cameraGuidance}
                                    onValueChange={setCameraGuidance}
                                    trackColor={{ false: "#3c3b54", true: "#6764f2" }}
                                    thumbColor="#ffffff"
                                />
                            </View>
                            <Pressable className="w-full rounded-2xl p-6 bg-surfaceDark border border-white/10 flex items-center justify-between mt-2">
                                <View className="flex items-center gap-4">
                                    <View className="size-12 rounded-full bg-white/10 flex items-center justify-center">
                                        <MaterialIcons name="school" size={28} color="#6764f2" />
                                    </View>
                                    <Text className="text-white text-xl font-semibold">Tutorial &amp; Practice</Text>
                                </View>
                                <MaterialIcons name="chevron-right" size={32} color="rgba(255,255,255,0.4)" />
                            </Pressable>
                            <Pressable className="w-full bg-secondary/10 border border-secondary/30 rounded-2xl p-6 flex items-center justify-between">
                                <View className="flex items-center gap-4">
                                    <View className="size-12 rounded-full bg-secondary flex items-center justify-center">
                                        <MaterialIcons name="sos" size={28} color="#ffffff" />
                                    </View>
                                    <View>
                                        <Text className="text-white text-xl font-semibold">Help &amp; Emergency</Text>
                                        <Text className="text-white/60 text-base mt-1">Contact Support</Text>
                                    </View>
                                </View>
                                <MaterialIcons name="chevron-right" size={32} color="#ff6b00" />
                            </Pressable>
                        </View>
                    </View>
                </View>
                <View className="absolute bottom-0 left-0 right-0 p-5 bg-backgroundDark border-t border-white/5">
                    <Pressable className="w-full bg-primary rounded-full py-5 flex-row items-center justify-center gap-3">
                        <MaterialIcons name="photo-camera" size={28} color="#ffffff" />
                        <Text className="text-white text-xl font-bold">Back to Camera</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}