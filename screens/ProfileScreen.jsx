import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import BottomTab from "../components/BottomTab";

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <View style={{ height: "100%", justifyContent: "space-between" }}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            paddingTop: 48,
          }}
        >
          <Image
            style={{ height: 150, width: 150 }}
            source={require("../assets/house.png")}
            resizeMode="cover"
          />
          <Text style={{ textAlign: "center" }}>
            Sign in or Create an account to access all the features of our
            platform
          </Text>
          <View
            style={{
              height: 40,
              width: 160,
              display: "flex",
              backgroundColor: "cyan",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
            }}
          >
            <Text style={{ fontWeight: "200", color: "white" }}>Login</Text>
          </View>
        </View>

        <View style={{ paddingHorizontal: 16, gap: 12 }}>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",

              flexDirection: "row",
              borderColor: "lightgray",
              borderBottomWidth: 1,
              paddingBottom: 12,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "600" }}>
              Privacy Policy
            </Text>
            <Feather name="edit" size={18} color="black" />
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",

              flexDirection: "row",
              borderColor: "lightgray",
              borderBottomWidth: 1,
              paddingBottom: 12,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "600" }}>
              Terms of Use
            </Text>
            <Feather name="edit" size={18} color="black" />
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",

              flexDirection: "row",
              borderColor: "lightgray",
              borderBottomWidth: 1,
              paddingBottom: 12,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "600" }}>Disclaimer</Text>
            <Feather name="edit" size={18} color="black" />
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",

              flexDirection: "row",
              borderColor: "lightgray",
              borderBottomWidth: 1,
              paddingBottom: 12,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "600" }}>FAQ</Text>
            <Feather name="edit" size={18} color="black" />
          </View>
        </View>

        <View></View>
      </View>

      <BottomTab />
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
