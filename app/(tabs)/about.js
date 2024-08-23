import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";

import HomeIcon from "../../Components/Iconos.jsx";
import { styled } from "nativewind";
import { Screen } from "../../Components/Screen.jsx";
const StylePresable = styled(Pressable);

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link asChild href="/">
          <StylePresable className={`active:opacity-80`}>
            <HomeIcon></HomeIcon>
          </StylePresable>
        </Link>
        <Text className="text-white font-bold mb-8 text-2xl">
          Sobre el proyecto
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorenm no se que poner es
        </Text>

        <Text className="text-white text-white/90 mb-4">
          Lorenm no se que poner es
        </Text>
        <Text className="text-white text-white/90 mb-4">otro texto</Text>
        <Text className="text-white text-white/90 mb-4">
          Lorenm no se que poner es
        </Text>
      </ScrollView>
    </Screen>
  );
}
