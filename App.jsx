import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NotificationsScreen from "./screens/NotificationsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import ProfileScreen from "./screens/ProfileScreen";
import Homepage from "./screens/Homepage";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons"; // Assuming you're using Expo for icons

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "cyan",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: {
            fontWeight: "200", // Set the font weight for the label
          },
          tabBarIcon: ({ color, size }) => {
            let iconName;

            // Set icons based on the route name
            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Favorites") {
              iconName = "favorite";
            } else if (route.name === "Notifications") {
              iconName = "notifications";
            } else if (route.name === "Profile") {
              iconName = "person";
            }

            // Return icons with MaterialIcons
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}
      >
        {/* Define screens for each tab */}
        <Tab.Screen
          name="Home"
          component={Homepage}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
