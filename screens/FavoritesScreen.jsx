import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

const FavoritesScreen = () => {
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View
        style={{
          backgroundColor: "cyan",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 14,
        }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: 12,
          }}
        >
          <AntDesign name="arrowleft" size={24} color="white" />
          <Text style={{ fontWeight: "200", color: "white", fontSize: 18 }}>
            Notifications
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
          }}
        >
          <Image
            style={{ height: 130, width: 130 }}
            source={require("../assets/home.png")}
            resizeMode="cover"
          />
          <Text style={{ fontWeight: "700", fontSize: 16 }}>
            Your favorites homes will be right here
          </Text>
          <Text style={{ fontWeight: "200", fontSize: 12 }}>
            Login to your account to access the
          </Text>
          <View
            style={{
              height: 50,
              width: 130,
              display: "flex",
              backgroundColor: "cyan",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 25,
            }}
          >
            <Text style={{ fontWeight: "200", color: "white" }}>Login</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({});
