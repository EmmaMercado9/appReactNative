import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { getLatestGames } from "../lib/metacritic.js";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard.jsx";

import { Screen } from "./Screen.jsx";

export default function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();
  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);
  return (
    <Screen>
      {games.length === 0 ? (
        <ActivityIndicator color={"#ffff"} size={"large"}></ActivityIndicator>
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index}></AnimatedGameCard>
          )}
        />
      )}
    </Screen>
  );
}
