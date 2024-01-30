import { StyleSheet, Text, View, StatusBar } from "react-native";
import InshortTabs from "./components/InshortTabs";
import Context from "./API/Context";
import { useFonts } from "expo-font";

function App() {
  const [fontsLoaded, fontError] = useFonts({
    "outfit": require("./assets/fonts/ttf/Outfit-Light.ttf"),
    "outfit-bold": require("./assets/fonts/ttf/Outfit-Bold.ttf"),
    "outfit-semibold": require("./assets/fonts/ttf/Outfit-SemiBold.ttf")
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={{ ...styles.container, backgroundColor: "#282C35" }}>
      <InshortTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default () => {
  return (
    <Context>
      <App />
    </Context>
  );
};
