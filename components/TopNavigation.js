import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";

const TopNavigation = ({ index, setIndex }) => {
  return (
    <View style={{ ...styles.container, backgroundColor: "#282C35" }}>
      {index === 0 ? (
        <TouchableOpacity style={styles.left}>
          <Text style={{ ...styles.text, color: "lightgrey" }}>
            <MaterialCommunityIcons
              name="theme-light-dark"
              size={24}
              color="#007FFF"
            />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}
        >
          <SimpleLineIcons name="arrow-left" size={24} color="#007FFF" />
          <Text style={{ ...styles.text, color: "lightgrey" }}>Discover</Text>
        </TouchableOpacity>
      )}
      {/* Middle Icons & Text */}
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
  text: {
    fontSize: 16,
  },
});
