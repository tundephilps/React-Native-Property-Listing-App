import "react-native-gesture-handler";

import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Homepage from "./screens/Homepage";
import NotificationsScreen from "./screens/NotificationsScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons"; // Assuming you're using Expo for icons
import FavoritesScreen from "./screens/FavoritesScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RequestProperty from "./screens/RequestProperty";
import ContactUs from "./screens/ContactUs";
import Research from "./screens/Research";
import Blogs from "./screens/Blogs";
import Developers from "./screens/Developers";
import CustomDrawerContent from "./components/CustomDrawerContent";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PropertyDetails from "./screens/PropertyDetails";
import InspectForm from "./screens/InspectForm";
import VerifyForm from "./screens/VerifyForm";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ navigation }) => {
  const Stack = createNativeStackNavigator();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Menu" options={{ headerShown: false }}>
        {() => (
          <Stack.Navigator>
            <Stack.Screen
              name="Homepage"
              component={Homepage}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Notifications"
              component={NotificationsScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Favorites"
              component={FavoritesScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RequestProperty"
              component={RequestProperty}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Developers"
              component={Developers}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Blogs"
              component={Blogs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ContactUs"
              component={ContactUs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Research"
              component={Research}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PropertyDetails"
              component={PropertyDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InspectForm"
              component={InspectForm}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerifyForm"
              component={VerifyForm}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "cyan",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontWeight: "300", // Set the font weight for the label
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
      initialRouteName="TabHome"
    >
      {/* Define screens for the tabs */}
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
  );
};

export default function App() {
  return (
    <>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </>
  );
}
