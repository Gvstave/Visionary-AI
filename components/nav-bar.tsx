import { usePathname, useRouter } from "expo-router";
import { View, } from "react-native";
import AiButton from "./ui/ai-button";
import NavButton from "./ui/nav-button";

export default function NavBar() {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <>
            <View className="flex flex-col items-center justify-center mb-6">
                <AiButton
                    iconName="shutter-speed"
                    iconClassName="relative z-10"
                    ariaLabel="Live gde"
                />
            </View>
            <View className="glass-panel rounded-3xl p-2 flex flex-row justify-between items-center h-24 shadow-2xl border border-white/10">
                <NavButton
                    iconName="search"
                    label="Find"
                    active={pathname === "/find"}
                    onPress={() => router.push("/")}
                />
                <NavButton
                    iconName="graphic-eq"
                    label="Guide"
                    active={pathname === "/"}
                    onPress={() => router.push("/")}
                />
                <NavButton
                    iconName="settings"
                    label="Settings"
                    active={pathname === "/settings"}
                    onPress={() => router.push("/settings")}
                />
            </View>
        </>
    )
}