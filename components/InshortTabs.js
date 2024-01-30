import { useWindowDimensions } from "react-native";
import React, { useContext, useState } from "react";
import { SceneMap, TabView } from "react-native-tab-view";
import DiscoverScreen from "../Screens/DiscoverScreen";
import NewsScreen from "../Screens/NewsScreen";
import TopNavigation from "./TopNavigation";
import { NewsContext } from "../API/Context";

const InshortTabs = () => {
  const layout = useWindowDimensions();
  //using context
  const { index, setIndex } = useContext(NewsContext);
  //Creating Routes
  const [routes] = useState([
    { key: "first", title: "Discover" },
    { key: "second", title: "News" },
  ]);

  const renderScene = SceneMap({
    first: DiscoverScreen,
    second: NewsScreen,
  });
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
    />
  );
};

export default InshortTabs;
