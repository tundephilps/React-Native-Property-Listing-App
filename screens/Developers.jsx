import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

const Developers = () => {
  const companies = [
    {
      name: "Brains and Hammers",
      address: "112A Olabode George Street, Victoria Island Lagos.",
      projects: 1,
      image: require("../assets/company1.jpg"),
    },
    {
      name: "Google Inc.",
      address: "Mountain View, California, USA",
      projects: 5,
      image: require("../assets/company2.jpg"),
    },
    {
      name: "Facibus housing.",
      address: "ikota Villa Residential Estate Lekki",
      projects: 3,
      image: require("../assets/company7.jpg"),
    },
    {
      name: "Veritas Home",
      address: "Olufemi pedro street Parkview estate",
      projects: 19,
      image: require("../assets/company4.png"),
    },
    {
      name: "HEREL Global",
      address: "26b admirality Way, Lekki Phase 1",
      projects: 12,
      image: require("../assets/company5.png"),
    },
    {
      name: "Roots Properties",
      address: "Olufemi pedro street Parkview estate",
      projects: 19,
      image: require("../assets/company6.jpg"),
    },
    {
      name: "Optimum Estate",
      address: "Olufemi pedro street Parkview estate",
      projects: 7,
      image: require("../assets/company3.png"),
    },
    // Add more companies here
  ];

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
      <ScrollView
        style={{ padding: 16, backgroundColor: "white", paddingBottom: 22 }}
      >
        <View style={{ display: "flex", gap: 8 }}>
          {companies.map((company, index) => (
            <View
              key={index}
              style={{
                display: "flex",
                gap: 12,
                padding: 6,
                borderColor: "lightgray",
                borderWidth: 1,
                flexDirection: "row",
                borderRadius: 5,
                alignItems: "center",
              }}
            >
              <View>
                <Image
                  style={{ height: 80, width: 80 }}
                  source={company.image}
                  resizeMode="cover"
                />
              </View>
              <View style={{ width: "70%" }}>
                <Text style={{ fontWeight: "700" }}>{company.name}</Text>
                <Text style={{ fontWeight: "200" }}>{company.address}</Text>
                <Text style={{ fontWeight: 200, color: "purple" }}>
                  {company.projects} Project(s)
                </Text>
              </View>
            </View>
          ))}

          <View></View>

          <View></View>

          <View></View>

          <View></View>

          <View></View>

          <View></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Developers;

const styles = StyleSheet.create({});
