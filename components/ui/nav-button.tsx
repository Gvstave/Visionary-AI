import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

type NavButtonProps = {
  iconName: keyof typeof MaterialIcons.glyphMap;
  label: string;
  iconColor?: string;
  labelClassName?: string;
  className?: string;
  active?: boolean;
  onPress?: () => void; 
};

export default function NavButton({
  iconName,
  label,
  labelClassName,
  className,
  active = false,
  onPress,
}: NavButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className={[
        "flex-1 flex flex-col items-center justify-center gap-1 h-full rounded-2xl",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <View>
        <MaterialIcons name={iconName} size={32} color={active ? "#ff6b00" : "#9d9db9"} />
      </View>
      <Text className={`${labelClassName} text-[#9d9db9] text-xs font-bold tracking-wide ${active ? 'text-white': ''}`}>{label}</Text>
    </Pressable>
  );
}