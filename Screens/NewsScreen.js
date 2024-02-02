import { View, Text, Dimensions, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import { NewsContext } from "../API/Context";
import Carousel from "react-native-snap-carousel";
import SingleNews from "../components/SingleNews";

const NewsScreen = () => {
  const {
    news: { articles },
  } = useContext(NewsContext);

  const [activeIndex, setactiveIndex] = useState();
  const windowHeight = Dimensions.get("window").height;

  return (
    <View style={styles.carousel}>
      {articles && (
        <Carousel
          layout={"stack"}
          data={articles.slice(0,15)}
          sliderHeight={300}
          itemHeight={windowHeight}
          vertical={true}
          renderItem={({ item, index }) => (
            <SingleNews item={item} index={index} />
          )}
          onSnapToItem={(index) => setactiveIndex}
        />
      )}
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    backgroundColor: "#000",
    },
});
