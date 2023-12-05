import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import { WebView } from "react-native-webview";
import { SafeAreaView } from "react-native-safe-area-context";

import { useRoute, useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const Research = ({ navigation }) => {
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
        <TouchableOpacity
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: 12,
          }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={24} color="white" />
          <Text style={{ fontWeight: "200", color: "white", fontSize: 18 }}>
            Research
          </Text>
        </TouchableOpacity>
      </View>
      <View></View>
    </SafeAreaView>
  );
};

export default Research;

const styles = StyleSheet.create({});
