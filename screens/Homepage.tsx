import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Tabs from "../components/Tabs";
import Search from "../components/Search";
import { AntDesign } from "@expo/vector-icons";
import Tabs2 from "../components/Tabs2";
import HorizontalFlatList from "../components/Flatlist";
import RentList from "../components/RentList";
import ShortLetList from "../components/ShortLetList";
import SaleList from "../components/SaleList";

const Homepage = () => {
  return (
    <SafeAreaView style={{}}>
      <ScrollView>
        <StatusBar backgroundColor="cyan" style="light" />
        {/* Top */}
        <View style={{ backgroundColor: "cyan", height: 280, padding: 16 }}>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 32,
                  fontWeight: "600",
                  color: "white",
                  width: "65%",
                }}
              >
                Find your home
              </Text>
            </View>

            <View>
              <Image
                style={{ height: 42, width: 42 }}
                source={require("../assets/menu1.png")}
                resizeMode="cover"
              />
            </View>
          </View>
          {/* Search */}
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 10,
              marginTop: 22,
              padding: 12,
            }}
          >
            <Tabs />
            <View style={{ marginTop: 18 }}>
              <Search />
            </View>
          </View>
        </View>
        {/* Body */}
        <View style={{ backgroundColor: "lightgray", paddingHorizontal: 4 }}>
          {/* Property List */}
          <View style={{ height: 450, backgroundColor: "white" }}>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                padding: 16,
              }}
            >
              <View>
                <Text style={{ fontWeight: "700", fontSize: 15 }}>
                  Featured Properties On sale
                </Text>

                <Text style={{ fontWeight: "200" }}>
                  High-Quality Featured Properties On sale
                </Text>
              </View>
              <View>
                <AntDesign name="arrowright" size={24} color="black" />
              </View>
            </View>

            {/* Tabs2 */}
            <View style={{ paddingTop: 32, padding: 8 }}>
              <Tabs2 />
            </View>

            {/* FlatList */}
            <HorizontalFlatList />
          </View>
        </View>

        <View
          style={{ backgroundColor: "white", marginTop: 12, paddingBottom: 12 }}
        >
          <RentList />
        </View>
        <View
          style={{ backgroundColor: "white", marginTop: 12, paddingBottom: 12 }}
        >
          <ShortLetList />
        </View>

        <View
          style={{ backgroundColor: "white", marginTop: 12, paddingBottom: 12 }}
        >
          <SaleList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homepage;

const styles = StyleSheet.create({});
