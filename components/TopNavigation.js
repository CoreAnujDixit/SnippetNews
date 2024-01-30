import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";
import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

const TopNavigation = ({ index, setIndex }) => {
  return (
    <View style={{ ...styles.container, backgroundColor: "#282C35" }}>
      {index === 0 ? (
        <TouchableOpacity style={styles.left}>
          <Text style={{ ...styles.text, color: "lightgrey" }}>
            <MaterialCommunityIcons
              name="theme-light-dark"
              size={24}
              color="tomato"
            />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}
        >
          <SimpleLineIcons name="arrow-left" size={24} color="tomato" />
          <Text style={{ ...styles.text, color: "lightgrey" }}>Discover</Text>
        </TouchableOpacity>
      )}

      {/* Middle Icons & Text */}
      <View style={styles.centerContainer}>
        <Text style={{ ...styles.center, color: "white" }}>
          {index ? "All News" : "Discover"}
        </Text>
      </View>

      {index ? (
        <TouchableOpacity style={styles.right}>
          {/* onPress={() => fetchNews("general")} */}
          <Text style={styles.text}>
            <AntDesign name="reload1" size={24} color="tomato" />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{ ...styles.left, alignItems: "center" }}
          onPress={() => setIndex(index === 0 ? 1 : 0)}
        >
          <Text style={{ ...styles.text, color: "white" }}>All News</Text>
          <SimpleLineIcons name="arrow-right" size={15} color="tomato" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TopNavigation;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    width: 80,
    justifyContent: "space-between",
  },
  centerContainer: {
    paddingBottom: 6,
    borderBottomColor: "tomato",
    borderBottomWidth: 5,
    borderRadius: 10,
    fontSize: 16,
    fontweight: "700",
  },
  text: {
    fontSize: 16,
  },
  center: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
