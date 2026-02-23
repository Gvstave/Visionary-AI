import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";

type AiButtonProps = {
  iconName: keyof typeof MaterialIcons.glyphMap;
  size?: number;
  color?: string;
  className?: string;
  iconClassName?: string;
  ariaLabel?: string;
};

export default function AiButton({
  iconName,
  size = 40,
  color = "#fff",
  className,
  iconClassName,
  ariaLabel,
}: AiButtonProps) {
  const baseClassName = "relative flex flex-col items-center justify-center w-20 h-20 rounded-full bg-primary text-white border-4 border-backgroundDark";
  return (
    <Pressable
      accessibilityLabel={ariaLabel}
      className={[baseClassName, className].filter(Boolean).join(" ")}
    >
      <View className="absolute inset-0 rounded-full border border-white/20 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] animate-ping"></View>
      <View className={iconClassName}>
        <MaterialIcons name={iconName} size={size} color={color} />
      </View>
    </Pressable>
  );
}
