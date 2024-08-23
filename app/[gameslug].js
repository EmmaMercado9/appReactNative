import { Stack } from "expo-router";
import { ActivityIndicator, ScrollView, Text, View, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../Components/Screen";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";
import Score from "../Components/Score";
export default function Detail() {
  const { gameslug } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (gameslug) {
      getGameDetails(gameslug).then(setGameInfo);
    }
  });
  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: "the legend",
          headerRight: () => {},
        }}
      ></Stack.Screen>
      <View>
        {gameInfo === null ? (
          <ActivityIndicator color={"#fff"} size={"large"}></ActivityIndicator>
        ) : (
          <ScrollView>
            <View className=" justify-center items-center text-center">
              <Image
                className="mb-4 rounded"
                source={{ uri: gameInfo.img }}
                style={{ width: 214, height: 294 }}
              ></Image>
            </View>
            <Score score={gameInfo.score} maxScore={100}></Score>
            <Text className="text-white text-center font-bold  text-xl">
              {gameInfo.title}
            </Text>
            <Text className="text-white/70 text-left mt-4 mb-8 text-base">
              {gameInfo.description}
            </Text>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
