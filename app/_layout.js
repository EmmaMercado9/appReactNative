import { View, Pressable } from "react-native";
import { Stack } from "expo-router";
import Logo from "../Components/Logo";
import { Link } from "expo-router";
import { CircleInfo } from "../Components/Iconos.jsx";

export default function Layout() {
  return (
    <View className="flex-1 bg-black">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTitle: "",
          headerLeft: () => <Logo></Logo>,
          headerRight: () => (
            <Link asChild href="/about">
              <Pressable>
                <CircleInfo> </CircleInfo>
              </Pressable>
            </Link>
          ),
        }}
      ></Stack>
    </View>
  );
}
