import { Tabs } from "expo-router";

import HomeIcon from "../../Components/Iconos";
import { InfoIcon } from "../../Components/Iconos";
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#000" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color}></HomeIcon>,
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => <InfoIcon color={color}></InfoIcon>,
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
