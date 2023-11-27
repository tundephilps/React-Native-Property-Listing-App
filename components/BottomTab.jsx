import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Assuming you're using Expo for icons

import { useNavigation } from "@react-navigation/native";

const BottomTab = () => {
  const navigation = useNavigation(); // Get the navigation object
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={styles.bottomTab}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate("Homepage")}
        >
          <Ionicons name="home-outline" size={24} color="black" />
          <Text style={styles.tabLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate("Favorites")}
        >
          <Ionicons name="heart-outline" size={24} color="black" />
          <Text style={styles.tabLabel}>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate("Notifications")}
        >
          <Ionicons name="notifications-outline" size={24} color="black" />
          <Text style={styles.tabLabel}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate("Profile")}
        >
          <Ionicons name="person-outline" size={24} color="black" />
          <Text style={styles.tabLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTab: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: "white",
    width: "100%",
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 0,
  },
  scrollView: {},
  tabItem: {
    alignItems: "center",
  },
  tabLabel: {
    fontSize: 12,
    color: "black",
    fontWeight: "200",
  },
});

export default BottomTab;
