import React from "react";
import { View, Text, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Research from "../screens/Research";
import ContactUs from "../screens/ContactUs";
import Blogs from "../screens/Blogs";
import Developers from "../screens/Developers";
import RequestProperty from "../screens/RequestProperty";
import Homepage from "../screens/Homepage";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = () => {
  const navigation = useNavigation(); // Get the navigation object
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          padding: 22,
          backgroundColor: "cyan",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            marginTop: 10,
            fontSize: 36,
            fontWeight: "700",
            color: "white",
          }}
        >
          Menu
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 22,
          padding: 24,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Homepage")}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 28,
            alignItems: "center",
          }}
        >
          <AntDesign name="home" size={28} color="black" />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("RequestProperty")}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 28,
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons
            name="home-search-outline"
            size={28}
            color="black"
          />
          <Text>Request Property</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Developers")}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 28,
            alignItems: "center",
          }}
        >
          <MaterialIcons name="engineering" size={28} color="black" />
          <Text>Developers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Blogs")}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 28,
            alignItems: "center",
          }}
        >
          <FontAwesome5 name="blog" size={28} color="black" />
          <Text>Blogs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("ContactUs")}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 28,
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons name="chat-outline" size={28} color="black" />
          <Text>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Research")}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 28,
            alignItems: "center",
          }}
        >
          <SimpleLineIcons name="graph" size={28} color="black" />
          <Text>Research insights</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawerContent;
