import { EvilIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Roll from "../components/Roll.jsx";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { ProgressBar } from "react-native-paper";

const data = [
  {
    id: "1",
    color: "Red",
    image: require("../assets/mask.png"),
    price: "13,000",
    brand: "Bloomzon Prime",
  },
  {
    id: "2",
    color: "Black",
    image: require("../assets/mask.png"),
    price: "13,100",

    brand: "Bloomzon Prime",
  },
  {
    id: "3",
    color: "Grey",
    image: require("../assets/mask.png"),
    price: "13,200",

    brand: "Bloomzon Prime",
  },
];

const sellerdata = [
  {
    id: "1",
    type: "iPhone 14 case...",
    image: require("../assets/iphone.png"),
    price: "1300",
    review: "2407 reviews",
  },
  {
    id: "2",
    type: "iPhone 14 case...",
    image: require("../assets/iphone.png"),
    price: "1300",
    review: "2407 reviews",
  },
  {
    id: "3",
    type: "iPhone 14 case...",
    image: require("../assets/iphone.png"),
    price: "1300",
    review: "2407 reviews",
  },
];

const renderSeller = ({ item }) => (
  <View
    style={{
      width: 170,
      backgroundColor: "#f5f5f5",
      padding: 16,
      marginHorizontal: 4,
    }}
  >
    <View style={{ display: "flex", alignItems: "center" }}>
      <Image
        style={{ height: 96, width: 120 }}
        source={require("../assets/iphone.png")}
        resizeMode="cover"
      />
    </View>
    <Text style={{ fontSize: 16, fontWeight: "700", paddingTop: 8 }}>
      {item.type}
    </Text>
    <View
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        gap: 3,
        paddingTop: 4,
      }}
    >
      <AntDesign name="star" size={14} color="#F67F00" />
      <AntDesign name="star" size={14} color="#F67F00" />
      <AntDesign name="star" size={14} color="#F67F00" />
      <AntDesign name="star" size={14} color="#F67F00" />
      <AntDesign name="star" size={14} color="#F67F00" />
    </View>
    <Text style={{ fontSize: 12, color: "#707070", paddingTop: 8 }}>
      2407 reviews
    </Text>
    <Text style={{ fontSize: 16, fontWeight: "600", paddingTop: 8 }}>
      N1,300
    </Text>
    <TouchableOpacity
      onPress={() => {
        /* handle onPress */
      }}
    >
      <View
        style={{
          backgroundColor: "#F67F00", // Background color
          marginTop: 6, // Margin top
          height: 40,
          paddingHorizontal: 18,
          borderRadius: 8,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 16, // Font size
            fontWeight: "normal", // Font weight
            color: "#fff", // Text color
          }}
        >
          Add to cart
        </Text>
      </View>
    </TouchableOpacity>
  </View>
);

const renderCard = ({ item }) => (
  <View
    style={{
      width: 124,
      borderColor: "lightgray",
      borderWidth: 2,
      borderRadius: 5,
      margin: 4,
    }}
  >
    <Image
      source={item.image}
      style={{ width: 124, height: 124 }}
      resizeMode="cover"
    />
    <View style={{ paddingHorizontal: 6, paddingBottom: 8 }}>
      <Text style={{ fontSize: 16, fontWeight: "600" }}>{item.color}</Text>
      <Text
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
          fontWeight: "700",
          fontSize: 20,
        }}
      >
        N{item.price}
      </Text>

      <Text
        style={{
          fontSize: 12,
          textAlign: "left",
          color: "#41CCC7",
        }}
      >
        {item.brand}
      </Text>
      <Text style={{ color: "#4CAF50", fontSize: 12 }}>In - Stock</Text>
      <Text style={{ color: "#707070", width: "90%" }}>
        Avaliable in size of 5 -13
      </Text>
    </View>
  </View>
);

const Page350 = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#FFFFFF" }}>
      <ScrollView>
        {/* Header */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 16,
          }}
        >
          <View>
            <AntDesign name="arrowleft" size={24} color="black" />
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              borderColor: "lightgray",
              borderWidth: 1,
              width: 200,
              padding: 10,
              borderRadius: 5,
            }}
          >
            <EvilIcons name="search" size={24} color="#707070" />
            <Text style={{ fontWeight: "100", color: "#707070" }}>Search</Text>
          </View>
          <View>
            <Image
              style={{ height: 20, width: 20 }}
              source={require("../assets/box-arrow.png")}
              resizeMode="cover"
            />
          </View>
          <View>
            <Entypo name="dots-three-horizontal" size={24} color="black" />
          </View>
        </View>
        <Roll />
        <View style={{ paddingHorizontal: 16 }}>
          <Text style={{ fontSize: 20, fontWeight: "600" }}>
            Custom heavyweight unisex printed hoodie Lorem ipsum dolor sit amet,
            consetetur
          </Text>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              gap: 6,
            }}
          >
            <Text style={{ fontWeight: "100", color: "#707070" }}>
              0 orders{" "}
            </Text>
            <View
              style={{
                borderRightWidth: 2,
                height: 15,
                borderColor: "lightgray",
              }}
            />
            <Text
              style={{
                textDecorationLine: "underline",
                color: "#0A0908",
                fontWeight: "300",
              }}
            >
              See store reviews
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              paddingTop: 8,
            }}
          >
            <View>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>$10.5</Text>
              <Text style={{ color: "#707070", fontWeight: "200" }}>
                Min. order: 100 pieces
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>$9.5</Text>
              <Text style={{ color: "#707070", fontWeight: "200" }}>
                300-400 pieces
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>$8.5</Text>
              <Text style={{ color: "#707070", fontWeight: "200" }}>
                500-999 pieces
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              gap: 4,
              paddingTop: 4,
            }}
          >
            <AntDesign name="star" size={14} color="#F67F00" />
            <AntDesign name="star" size={14} color="#F67F00" />
            <AntDesign name="star" size={14} color="#F67F00" />
            <AntDesign name="star" size={14} color="#F67F00" />
            <AntDesign name="star" size={14} color="#F67F00" />
            <Text style={{ color: "#707070", fontSize: 12 }}>(173)</Text>
          </View>

          {/* Diamond */}
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "lightgray",
              paddingTop: 8,
            }}
          ></View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 12,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
              }}
            >
              <View>
                <FontAwesome name="diamond" size={24} color="#0A0908" />
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  width: "80%",
                }}
              >
                <Text style={{ fontSize: 16, color: "#0A0908" }}>
                  Bloomzon Prime Buyer club
                </Text>
                <Text style={{ fontSize: 16, fontWeight: "700" }}>
                  5 percent off on your purchase on Bloomzon
                </Text>
              </View>
            </View>
            <View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "lightgray",
              paddingTop: 12,
            }}
          ></View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 12,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                textDecorationLine: "underline",
                fontWeight: "600",
              }}
            >
              Start order
            </Text>
            <Text>
              <MaterialIcons
                name="keyboard-arrow-up"
                size={24}
                color="#707070"
              />
            </Text>
          </View>
          <Text style={{ color: "#707070", fontSize: 16 }}>
            Select color and Size
          </Text>

          <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderCard}
            keyExtractor={(item) => item.id}
          />
          {/* Card */}
          <View style={{ paddingVertical: 16 }}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Sample</Text>

            <Text style={{ fontSize: 16, paddingTop: 6 }}>Sample price:</Text>

            <Text style={{ paddingTop: 6 }}>
              <Text style={{ fontSize: 16, fontWeight: "600" }}>$60/piece</Text>{" "}
              (Min. order: 1 piece)
            </Text>

            <Text>
              <Text
                style={{
                  textDecorationLine: "underline",
                  fontSize: 16,
                }}
              >
                Select from
              </Text>{" "}
              Color: 9, Size: 8
            </Text>
            <TouchableOpacity
              onPress={() => {
                /* handle onPress */
              }}
              style={{ paddingTop: 12 }}
            >
              <View
                style={{
                  marginTop: 6, // Margin top
                  height: 48,
                  paddingHorizontal: 18,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: "orange",
                }}
              >
                <Text
                  style={{
                    fontSize: 16, // Font size
                    fontWeight: "normal", // Font weight
                    color: "orange", // Text color
                  }}
                >
                  Get sample
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "lightgray",
                paddingTop: 16,
              }}
            ></View>
          </View>
          {/* Card */}
          <View style={{ paddingVertical: 0 }}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              Online Customization
            </Text>

            <Text style={{ fontSize: 16, paddingTop: 6 }}>Base price:</Text>

            <Text style={{ paddingTop: 6 }}>
              <Text style={{ fontSize: 16, fontWeight: "600" }}>$60/piece</Text>
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "200" }}>MOQ 1 Piece</Text>
            <Text style={{ fontSize: 16, fontWeight: "200" }}>
              Customizable: Logo/Text
            </Text>
            <TouchableOpacity
              onPress={() => {
                /* handle onPress */
              }}
              style={{ paddingTop: 12 }}
            >
              <View
                style={{
                  marginTop: 6, // Margin top
                  height: 48,
                  paddingHorizontal: 18,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: "orange",
                }}
              >
                <Text
                  style={{
                    fontSize: 16, // Font size
                    fontWeight: "normal", // Font weight
                    color: "orange", // Text color
                  }}
                >
                  Customize now
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "lightgray",
                paddingTop: 16,
              }}
            ></View>
          </View>
          {/* Card */}
          <View style={{ paddingVertical: 16 }}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              Product Description
            </Text>

            <Text style={{ paddingTop: 6, fontWeight: "200" }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. Att
            </Text>
            <TouchableOpacity
              onPress={() => {
                /* handle onPress */
              }}
              style={{ paddingTop: 12 }}
            >
              <View
                style={{
                  marginTop: 6, // Margin top
                  height: 48,
                  paddingHorizontal: 18,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: "orange",
                }}
              >
                <Text
                  style={{
                    fontSize: 16, // Font size
                    fontWeight: "normal", // Font weight
                    color: "orange", // Text color
                  }}
                >
                  Show more
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "lightgray",
                paddingTop: 16,
              }}
            ></View>
          </View>
          {/* Product Spec */}
          <View>
            <Text style={{ fontSize: 18, fontWeight: "700" }}>
              Product Specification
            </Text>
            {/* Card */}
            <View
              style={{
                height: 80,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: "lightgray",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: "40%",
                  backgroundColor: "#F5F5F5",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "600", width: "80%" }}>
                  Department Name
                </Text>
              </View>
              <View
                style={{
                  padding: 16,
                  width: "60%",
                  backgroundColor: "#FFFFFF",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Text style={{ color: "#707070", fontSize: 16 }}>Men </Text>
              </View>
            </View>
            {/* Card */}
            <View
              style={{
                height: 55,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: "40%",
                  backgroundColor: "#F5F5F5",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "600", width: "80%" }}>
                  Pant Length
                </Text>
              </View>
              <View
                style={{
                  padding: 16,
                  width: "60%",
                  backgroundColor: "#FFFFFF",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Text
                  style={{ color: "#707070", fontSize: 16, fontWeight: "200" }}
                >
                  Full Length{" "}
                </Text>
              </View>
            </View>
            {/* Card */}
            <View
              style={{
                height: 80,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: "lightgray",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: "40%",
                  backgroundColor: "#F5F5F5",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "600", width: "80%" }}>
                  Fit
                </Text>
              </View>
              <View
                style={{
                  padding: 16,
                  width: "60%",
                  backgroundColor: "#FFFFFF",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Text style={{ color: "#707070", fontSize: 16 }}>
                  Fits true to size, take your normal size{" "}
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              /* handle onPress */
            }}
            style={{ paddingTop: 12 }}
          >
            <View
              style={{
                marginTop: 6, // Margin top
                height: 48,
                paddingHorizontal: 18,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderColor: "orange",
              }}
            >
              <Text
                style={{
                  fontSize: 16, // Font size
                  fontWeight: "normal", // Font weight
                  color: "orange", // Text color
                }}
              >
                Show more
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            borderBottomWidth: 2,

            borderBottomColor: "lightgray",
            paddingTop: 12,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "#ffffff",
            height: 80,
            padding: 16,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700" }}>Support</Text>
            <Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={18}
                color="black"
              />
            </Text>
          </View>
          <Text style={{ color: "#707070", fontSize: 16 }}>
            Contact Customer Support
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 2,

            borderBottomColor: "lightgray",
          }}
        ></View>
        <View
          style={{
            backgroundColor: "#ffffff",
            padding: 16,
          }}
        >
          <Text style={{ fontSize: 19, fontWeight: "700" }}>
            Purchase details
          </Text>

          <View
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              gap: 6,
              paddingTop: 4,
            }}
          >
            <Text style={{ fontWeight: "200", color: "#707070" }}>
              Protection with
            </Text>
            <View>
              <Image
                style={{ height: 22, width: 24 }}
                source={require("../assets/dollar.png")}
                resizeMode="cover"
              />
            </View>
            <Text style={{ fontSize: 14, fontWeight: "600" }}>
              Trade Assurance{" "}
            </Text>
          </View>
          {/* Shipping Payment */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 12,
            }}
          >
            <View style={{ display: "flex", marginTop: 6 }}>
              <Image
                style={{ height: 10, width: 24 }}
                source={require("../assets/van.png")}
                resizeMode="cover"
              />
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 12,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  width: "80%",
                }}
              >
                <Text
                  style={{ fontSize: 16, color: "#0A0908", fontWeight: "700" }}
                >
                  Shipping
                </Text>
                <Text style={{ fontSize: 14, fontWeight: "100" }}>
                  <Text style={{ textDecorationLine: "underline" }}>
                    Contact supplier
                  </Text>{" "}
                  to negotiate shipping details Enjoy
                  <Text style={{ color: "#F67F00" }}>
                    {" "}
                    On-time Dispatch Guarantee
                  </Text>
                </Text>
              </View>
            </View>
            <View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </View>
          </View>
          {/* Shipping Payment */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 12,
            }}
          >
            <View style={{ display: "flex" }}>
              <Ionicons
                name="shield-checkmark-outline"
                size={24}
                color="black"
              />
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 12,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  width: "80%",
                }}
              >
                <Text
                  style={{ fontSize: 16, color: "#0A0908", fontWeight: "700" }}
                >
                  Payments
                </Text>
                <View
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 6,
                    paddingTop: 6,
                  }}
                >
                  <View>
                    <Image
                      style={{ height: 24, width: 40 }}
                      source={require("../assets/visa.png")}
                      resizeMode="cover"
                    />
                  </View>
                  <View>
                    <Image
                      style={{ height: 24, width: 40 }}
                      source={require("../assets/mastercard.png")}
                      resizeMode="cover"
                    />
                  </View>
                  <View>
                    <Image
                      style={{ height: 24, width: 40 }}
                      source={require("../assets/paypal.png")}
                      resizeMode="cover"
                    />
                  </View>
                  <View>
                    <Image
                      style={{ height: 24, width: 40 }}
                      source={require("../assets/express.png")}
                      resizeMode="cover"
                    />
                  </View>
                  <View>
                    <Image
                      style={{ height: 24, width: 40 }}
                      source={require("../assets/dots.png")}
                      resizeMode="cover"
                    />
                  </View>
                </View>
                <Text style={{ fontSize: 14, fontWeight: "100" }}>
                  Enjoy encrypted and secure payments
                </Text>
              </View>
            </View>
            <View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </View>
          </View>

          {/* Shipping Payment */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 12,
            }}
          >
            <View style={{ display: "flex", marginTop: 6 }}>
              <Image
                style={{ height: 19, width: 19 }}
                source={require("../assets/arrowcurve.png")}
                resizeMode="cover"
              />
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 12,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  width: "80%",
                }}
              >
                <Text
                  style={{ fontSize: 16, color: "#0A0908", fontWeight: "700" }}
                >
                  Returns & Refunds
                </Text>
                <Text style={{ fontSize: 14, fontWeight: "100" }}>
                  <Text style={{}}>Eligible for returns and refunds</Text>
                </Text>
              </View>
            </View>
            <View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </View>
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "lightgray",
          }}
        ></View>

        {/* Gallery */}
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>
            Product Image Gallery
          </Text>

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 16,
              gap: 6,
            }}
          >
            <View>
              <Image
                style={{ height: 240 }}
                source={require("../assets/jacket.png")}
                resizeMode="cover"
              />
            </View>
            <View>
              <Image
                style={{ height: 240 }}
                source={require("../assets/jacket.png")}
                resizeMode="cover"
              />
            </View>
            <View>
              <Image
                style={{ height: 240 }}
                source={require("../assets/jacket.png")}
                resizeMode="cover"
              />
            </View>
            <View>
              <Image
                style={{ height: 240 }}
                source={require("../assets/jacket.png")}
                resizeMode="cover"
              />
            </View>
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "lightgray",
          }}
        ></View>

        {/* Review */}
        <View style={{ display: "flex", padding: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>Reviews</Text>
          <Text style={{ fontSize: 16, fontWeight: "700" }}>
            Product reviews
          </Text>
          <Text style={{ color: "#707070" }}>
            No product reviews yet. See store reviews
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 6,
            }}
          >
            <Text style={{ fontSize: 16, color: "#707070", fontWeight: "700" }}>
              Store reviews
            </Text>

            <Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </Text>
          </View>
          <Text style={{ fontSize: 20, fontWeight: "700", paddingTop: 6 }}>
            4.1/5 <Text style={{ marginLeft: 6 }}> Very Satisfied </Text>
          </Text>
          {/* Progress */}
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              paddingTop: 12,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ width: "50%" }}>
                <Text
                  style={{
                    fontWeight: 200,
                    color: "#707070",
                    fontSize: 14,
                  }}
                >
                  Product Quality
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View style={{ width: "60%" }}>
                  <ProgressBar
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={0.9} // Set the progress value between 0 and 1
                    color="orange" // Customize the color
                  />
                </View>
                <Text style={{ fontWeight: "200" }}> 4.2</Text>
              </View>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ width: "50%" }}>
                <Text
                  style={{
                    fontWeight: 200,
                    color: "#707070",
                    fontSize: 14,
                  }}
                >
                  Supplier Services
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View style={{ width: "60%" }}>
                  <ProgressBar
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={0.6} // Set the progress value between 0 and 1
                    color="orange" // Customize the color
                  />
                </View>
                <Text style={{ fontWeight: "200" }}> 4.0</Text>
              </View>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ width: "50%" }}>
                <Text
                  style={{
                    fontWeight: 200,
                    color: "#707070",
                    fontSize: 14,
                  }}
                >
                  On-time Shipment
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View style={{ width: "60%" }}>
                  <ProgressBar
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={0.8} // Set the progress value between 0 and 1
                    color="orange" // Customize the color
                  />
                </View>
                <Text style={{ fontWeight: "200" }}> 4.1</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              /* handle onPress */
            }}
            style={{ paddingTop: 12 }}
          >
            <View
              style={{
                marginTop: 6, // Margin top
                height: 48,
                paddingHorizontal: 18,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderColor: "orange",
              }}
            >
              <Text
                style={{
                  fontSize: 16, // Font size
                  fontWeight: "normal", // Font weight
                  color: "orange", // Text color
                }}
              >
                See all reviews
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "lightgray",
          }}
        ></View>
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>
            Discount & Coupans
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              paddingTop: 12,
            }}
          >
            <View
              style={{
                borderColor: "lightgray",
                borderWidth: 1,
                padding: 12,
                borderRadius: 5,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "600" }}>5% Off</Text>
              <Text style={{ color: "#707070", fontWeight: "200" }}>
                Store Discount
              </Text>
            </View>
            <View
              style={{
                borderColor: "lightgray",
                borderWidth: 1,
                padding: 12,
                borderRadius: 5,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "600" }}>5% Off</Text>
              <Text style={{ color: "#707070", fontWeight: "200" }}>
                Store Coupon
              </Text>
            </View>
            <View
              style={{
                borderColor: "lightgray",
                borderWidth: 1,
                padding: 12,
                borderRadius: 5,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "600" }}>5% Off</Text>
              <Text style={{ color: "#707070", fontWeight: "200" }}>
                Store Coupon
              </Text>
            </View>
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "lightgray",
              paddingTop: 16,
            }}
          ></View>
          <View
            style={{
              paddingVertical: 16,
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontSize: 18, fontWeight: "700" }}>Delivery </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Feather name="map-pin" size={14} color="black" />
              <Text style={{ fontWeight: "200", fontSize: 16 }}>
                To United States
              </Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={18}
                color="black"
              />
            </View>
          </View>

          <Text style={{ fontSize: 16, fontWeight: "700" }}>Free Shipping</Text>
          <Text style={{ color: "#707070", paddingTop: 4 }}>
            From China via Cainiao Super Economy Global Estimated delivery on
            Apr 29
          </Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "lightgray",
              paddingTop: 12,
            }}
          ></View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 12,
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 18 }}>Service</Text>

            <Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={18}
                color="black"
              />
            </Text>
          </View>
          <Text style={{ color: "#707070", fontSize: 16 }}>
            75-day Buyer Protection
          </Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "lightgray",
              paddingTop: 12,
            }}
          ></View>
          <Text style={{ fontWeight: "700", fontSize: 18, paddingTop: 12 }}>
            Questions & Answers (0){" "}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 12,
              paddingTop: 6,
            }}
          >
            <MaterialCommunityIcons
              name="comment-question-outline"
              size={19}
              color="#707070"
            />
            <Text style={{ color: "#707070" }}>
              Want to know more about the product? Ask others who bought it.
            </Text>
          </View>
          <Text
            style={{
              color: "#F67F00",
              marginLeft: 32,
              paddingTop: 8,
              fontSize: 16,
            }}
          >
            Ask Now
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "lightgray",
          }}
        ></View>
        {/* Card */}
        <View
          style={{
            padding: 16,
            borderBottomWidth: 2,
            borderBottomColor: "lightgray",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: 8,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700" }}>
              Sale From This Seller{" "}
            </Text>
            <Text style={{ color: "#F67F00", fontSize: 16, fontWeight: "600" }}>
              See more
            </Text>
          </View>
          {/* FlatList */}
          <FlatList
            data={sellerdata}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderSeller}
            keyExtractor={(item) => item.id}
          />
        </View>

        {/* Card */}
        <View
          style={{
            padding: 16,
            borderBottomWidth: 2,
            borderBottomColor: "lightgray",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: 8,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700" }}>
              New Arrival From This Seller
            </Text>
            <Text style={{ color: "#F67F00", fontSize: 16, fontWeight: "600" }}>
              See more
            </Text>
          </View>
          {/* FlatList */}
          <FlatList
            data={sellerdata}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderSeller}
            keyExtractor={(item) => item.id}
          />
        </View>
        {/* Card */}
        <View
          style={{
            padding: 16,
            borderBottomWidth: 2,
            borderBottomColor: "lightgray",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: 8,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700" }}>
              Recommended By This Seller
            </Text>
            <Text style={{ color: "#F67F00", fontSize: 16, fontWeight: "600" }}>
              See more
            </Text>
          </View>
          {/* FlatList */}
          <FlatList
            data={sellerdata}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderSeller}
            keyExtractor={(item) => item.id}
          />
        </View>
        {/* Card */}
        <View
          style={{
            padding: 16,
            borderBottomWidth: 2,
            borderBottomColor: "lightgray",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: 8,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700", width: "70%" }}>
              Similar Product From This Supplier
            </Text>
            <Text style={{ color: "#F67F00", fontSize: 16, fontWeight: "600" }}>
              See more
            </Text>
          </View>
          {/* FlatList */}
          <FlatList
            data={sellerdata}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderSeller}
            keyExtractor={(item) => item.id}
          />
        </View>
        {/* Card */}
        <View
          style={{
            padding: 16,
            borderBottomWidth: 2,
            borderBottomColor: "lightgray",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: 8,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700", width: "70%" }}>
              Best-Selling Products From This Supplier
            </Text>
            <Text style={{ color: "#F67F00", fontSize: 16, fontWeight: "600" }}>
              See more
            </Text>
          </View>
          {/* FlatList */}
          <FlatList
            data={sellerdata}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderSeller}
            keyExtractor={(item) => item.id}
          />
        </View>

        {/* Card */}
        <View
          style={{
            padding: 16,
            borderBottomWidth: 2,
            borderBottomColor: "lightgray",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: 8,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700", width: "70%" }}>
              Discover More Products From This Supplier
            </Text>
            <Text style={{ color: "#F67F00", fontSize: 16, fontWeight: "600" }}>
              See more
            </Text>
          </View>
          {/* FlatList */}
          <FlatList
            data={sellerdata}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderSeller}
            keyExtractor={(item) => item.id}
          />
        </View>
        {/* Card */}
        <View
          style={{
            padding: 16,
            borderBottomWidth: 2,
            borderBottomColor: "lightgray",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: 8,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700", width: "70%" }}>
              Hot Product From This Supplier
            </Text>
            <Text style={{ color: "#F67F00", fontSize: 16, fontWeight: "600" }}>
              See more
            </Text>
          </View>
          {/* FlatList */}
          <FlatList
            data={sellerdata}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderSeller}
            keyExtractor={(item) => item.id}
          />
        </View>
        {/* Card */}
        <View
          style={{
            padding: 16,
            borderBottomWidth: 2,
            borderBottomColor: "lightgray",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: 8,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700", width: "70%" }}>
              Best Rated Product From This Supplier
            </Text>
            <Text style={{ color: "#F67F00", fontSize: 16, fontWeight: "600" }}>
              See more
            </Text>
          </View>
          {/* FlatList */}
          <FlatList
            data={sellerdata}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderSeller}
            keyExtractor={(item) => item.id}
          />
        </View>

        <LinearGradient
          colors={["#41CCC7", "#F5F5F5"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0.4 }}
          style={styles.linearGradient}
        >
          <View style={{ padding: 16 }}>
            <Text style={{ color: "#F67F00", fontSize: 14 }}>
              Verified Custom Manufacturer
              <FontAwesome name="check" size={13} color="#41CCC7" />
            </Text>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ width: "70%" }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#0A0908",
                    paddingTop: 8,
                    fontWeight: "500",
                  }}
                >
                  Guangzhou Three Good Fashion Import & Export Co,...
                </Text>
              </View>
            </View>
            <View
              style={{
                color: "#707070",
                fontSize: 14,
                fontWeight: 200,
                paddingTop: 8,
                display: "flex",
                flexDirection: "row",
                gap: 6,
                alignItems: "center",
              }}
            >
              <Image
                style={{ height: 24, width: 37 }}
                source={require("../assets/china.png")}
                resizeMode="cover"
              />

              <View>
                <Text style={{ fontWeight: "300" }}>CN </Text>
              </View>
              <View
                style={{
                  height: 24,
                  width: 32,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#E4E4E4",
                  borderRadius: 5,
                }}
              >
                <Text style={{ fontWeight: "100", fontSize: 12 }}> 1 YR</Text>
              </View>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 24,
              }}
            >
              <View
                style={{
                  alignItems: "flex-start",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "700",
                  }}
                >
                  4.9/5
                </Text>

                <Text
                  style={{ fontSize: 14, fontWeight: "200", color: "#707070" }}
                >
                  Store rating
                </Text>
              </View>

              <View
                style={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: "700" }}>94.4%</Text>

                <Text
                  style={{ fontSize: 14, fontWeight: "200", color: "#707070" }}
                >
                  On-time delivery rate
                </Text>
              </View>
              <View
                style={{
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: "700" }}>≤ 3h</Text>

                <Text
                  style={{ fontSize: 14, fontWeight: "200", color: "#707070" }}
                >
                  Response time
                </Text>
              </View>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 24,
              }}
            >
              <View>
                <Text style={{ fontSize: 20, fontWeight: "700" }}>
                  $130,000+
                </Text>

                <Text
                  style={{ fontSize: 14, fontWeight: "200", color: "#707070" }}
                >
                  Transactions
                </Text>
              </View>

              <View style={{ marginRight: 45 }}>
                <Text style={{ fontSize: 20, fontWeight: "700" }}>4000m2</Text>

                <Text
                  style={{ fontSize: 14, fontWeight: "200", color: "#707070" }}
                >
                  Floorspace
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: "700" }}>81</Text>

                <Text
                  style={{ fontSize: 14, fontWeight: "200", color: "#707070" }}
                >
                  Staff
                </Text>
              </View>
            </View>

            <Text style={{ color: "#707070", paddingTop: 8 }}>Services</Text>
            <Text style={{ fontSize: 16, fontWeight: "600", width: "80%" }}>
              Minor customization, Design-based customization
            </Text>
            <Text style={{ color: "#707070", paddingTop: 8 }}>
              Quality control
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              Finished product inspection QA/QC inspector....
            </Text>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 12,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  /* handle onPress */
                }}
              >
                <View
                  style={{
                    marginTop: 6, // Margin top
                    height: 40,
                    paddingHorizontal: 50,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: "#F67F00",

                    borderWidth: 1,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16, // Font size
                      fontWeight: "normal", // Font weight
                      color: "#F67F00", // Text color
                    }}
                  >
                    Follow{" "}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  /* handle onPress */
                }}
              >
                <View
                  style={{
                    marginTop: 6, // Margin top
                    height: 40,
                    paddingHorizontal: 50,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: "#F67F00",
                    borderWidth: 1,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16, // Font size
                      fontWeight: "normal", // Font weight
                      color: "#F67F00", // Text color
                    }}
                  >
                    Visit store
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Page350;
