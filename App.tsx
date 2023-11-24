import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HorizontalFlatList from "./components/Flatlist";
import Tabs from "./components/Tabs";
import Tabs2 from "./components/Tabs2";
import RentList from "./components/RentList";
import SaleList from "./components/SaleList";
import Search from "./components/Search";
import ShortLetList from "./components/ShortLetList";
import Homepage from "./screens/Homepage";
import NotificationsScreen from "./screens/NotificationsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

export default function App() {
  return (
    <View>
      <FavoritesScreen />
    </View>
  );
}

const styles = StyleSheet.create({});
