import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";

import MapView, { Marker } from "react-native-maps";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons"; // Assuming you're using Expo for icons
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

import * as Linking from "expo-linking"; // For Expo projects

const ContactUs = ({ navigation }) => {
  const openEmail = () => {
    Linking.openURL("mailto:info@buyletlive.com");
  };

  const makePhoneCall = () => {
    Linking.openURL("tel:+23409131037985");
  };
  const openFacebook = () => {
    Linking.openURL("https://www.facebook.com");
  };

  const openTwitter = () => {
    Linking.openURL("https://twitter.com");
  };

  const openInstagram = () => {
    Linking.openURL("https://www.instagram.com");
  };

  const companyAddress = `112A Olabode George Street,\nVictoria Island, Lagos`;

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ position: "relative" }}>
        <TouchableOpacity
          style={{
            position: "absolute",
            height: 40,
            width: 40,
            backgroundColor: "white",
            left: 0,
            top: 55,
            zIndex: 99,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 6.5244,
            longitude: 3.3792,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: 6.5244, longitude: 3.3792 }}
            title="Company Location"
          />
        </MapView>
      </View>

      <View style={styles.addressContainer}>
        <Text style={{ fontWeight: "700", fontSize: 19 }}>Contact Us</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            paddingTop: 12,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 22,
              width: "80%",
            }}
          >
            <Text style={{ fontWeight: "200", color: "gray" }}>
              Lagos{"  "}
              {""}
            </Text>
            <Text style={{ fontWeight: "200" }}>
              13, Otunba Adedoyin, Ogungbe Crecent, Lekki Phase 1, Lagos,
              Nigeria
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 22,
              width: "80%",
            }}
          >
            <Text style={{ fontWeight: "200", color: "gray" }}>London</Text>
            <Text style={{ fontWeight: "200" }}>
              Kemp House, 160 City Road, London, ECIV 2NX
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          marginTop: 12,
          padding: 20,
        }}
      >
        <Text style={{ fontWeight: "700", fontSize: 19, paddingBottom: 12 }}>
          Reach Out
        </Text>
        <View style={{ display: "flex", gap: 12 }}>
          <TouchableOpacity
            style={{
              padding: 8,
              borderWidth: 1,
              borderColor: "lightgray",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              gap: 18,
              borderRadius: 5,
            }}
            onPress={openEmail}
          >
            <Feather name="mail" size={24} color="black" />
            <Text style={{ fontWeight: "200" }}>Email Us</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              padding: 8,
              borderWidth: 1,
              borderColor: "lightgray",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              gap: 18,
              borderRadius: 5,
            }}
            onPress={makePhoneCall}
          >
            <Ionicons name="call-outline" size={24} color="black" />
            <Text style={{ fontWeight: "200" }}>Call Us</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              padding: 8,
              borderWidth: 1,
              borderColor: "lightgray",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              gap: 18,
              borderRadius: 5,
            }}
          >
            <Ionicons name="send" size={24} color="black" />
            <Text style={{ fontWeight: "200" }}>Send a Message</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              padding: 8,
              borderWidth: 1,
              borderColor: "lightgray",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              gap: 18,
              borderRadius: 5,
            }}
            onPress={openFacebook}
          >
            <Feather name="facebook" size={24} color="black" />
            <Text style={{ fontWeight: "200" }}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 8,
              borderWidth: 1,
              borderColor: "lightgray",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              gap: 18,
              borderRadius: 5,
            }}
            onPress={openInstagram}
          >
            <AntDesign name="instagram" size={24} color="black" />
            <Text style={{ fontWeight: "200" }}>Instagram</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              padding: 8,
              borderWidth: 1,
              borderColor: "lightgray",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              gap: 18,
              borderRadius: 5,
            }}
            onPress={openTwitter}
          >
            <Feather name="twitter" size={24} color="black" />
            <Text style={{ fontWeight: "200" }}>Twitter</Text>
          </TouchableOpacity>
          <View
            style={{
              padding: 8,
              borderWidth: 1,
              borderColor: "lightgray",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              gap: 18,
              borderRadius: 5,
            }}
          >
            <Feather name="linkedin" size={24} color="black" />
            <Text style={{ fontWeight: "200" }}>Linkedin</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2,
  },
  addressContainer: {
    backgroundColor: "white",
    padding: 20,
  },
  addressText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
