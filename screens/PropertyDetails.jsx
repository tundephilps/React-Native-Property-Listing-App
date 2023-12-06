import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import Swiper from "react-native-swiper";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import InspectForm from "./InspectForm";
import VerifyForm from "./VerifyForm";

const CardComponent = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={{ fontWeight: "200" }}>{item.address}</Text>
        <Text style={styles.description}>{item.price}</Text>
      </View>
    </View>
  );
};

const PropertyDetails = ({ navigation }) => {
  const [swiperIndex, setSwiperIndex] = useState(0);

  const [modalVisible, setModalVisible] = useState(false);

  const [modalVisible2, setModalVisible2] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openModal2 = () => {
    setModalVisible2(true);
  };

  const closeModal2 = () => {
    setModalVisible2(false);
  };

  const data = [
    {
      id: "1",

      image: "https://via.placeholder.com/200x150",

      description: "Description 1",
      price: "N1,500,000",
      address: "Akobo Ibadan, Oyo state",
    },
    {
      id: "2",

      image: "https://via.placeholder.com/200x150",

      description: "Description 1",
      price: "N4,000,000",
      address: "Lekki, Lagos Island",
    },

    // Add more data items as needed
  ];

  const images = [
    require("../assets/house.jpg"),
    require("../assets/living.jpg"),
    require("../assets/room.jpg"),

    require("../assets/toilet.jpg"),
    // Add more image objects as needed
  ];

  const radioButtonsData = images.map((image, index) => ({
    id: index,
    label: " ",
    value: index === swiperIndex,
  }));

  return (
    <ScrollView style={{ backgroundColor: "lightgray" }}>
      <View style={styles.swipercontainer}>
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 30,
            left: 10,
            zIndex: 99,
          }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="md-arrow-back-outline" size={24} color="white" />
        </TouchableOpacity>
        <Swiper
          style={styles.swiper}
          showsButtons={false}
          loop={false}
          onIndexChanged={(index) => setSwiperIndex(index)}
          activeDotColor="orange"
        >
          {images.map((image, index) => (
            <Image
              key={index}
              source={image}
              style={{ width: "100%", height: 250 }}
              resizeMode="cover"
            />
          ))}
        </Swiper>
      </View>
      <View style={{ padding: 16, backgroundColor: "white" }}>
        <Text>ID: BLLP-687560</Text>
        <Text style={{ fontSize: 21, fontWeight: "700", paddingTop: 8 }}>
          Modern luxury 5 bedroom Twin Duplex with a BQ
        </Text>
        <Text
          style={{
            color: "purple",
            fontSize: 16,
            fontWeight: "700",
            paddingTop: 2,
          }}
        >
          N6,000,000.00
        </Text>
        <Text>Bodija, ibadan, OYO</Text>
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            gap: 8,
            paddingTop: 12,
          }}
        >
          <View
            style={{
              backgroundColor: "#eeeeee",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 6,
              paddingHorizontal: 12,
              borderRadius: 15,
              gap: 4,
            }}
          >
            <Ionicons name="bed-outline" size={24} color="black" />
            <Text style={{ fontWeight: "200" }}>5 Bedroom</Text>
          </View>
          <View
            style={{
              backgroundColor: "#eeeeee",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 6,
              paddingHorizontal: 12,
              borderRadius: 15,
              gap: 4,
            }}
          >
            <MaterialCommunityIcons
              name="bathtub-outline"
              size={24}
              color="black"
            />
            <Text style={{ fontWeight: "200" }}>No baths</Text>
          </View>
          <View
            style={{
              backgroundColor: "#eeeeee",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 6,
              paddingHorizontal: 12,
              borderRadius: 15,
              gap: 4,
            }}
          >
            <MaterialCommunityIcons name="toilet" size={24} color="black" />
            <Text style={{ fontWeight: "200" }}> No toilets</Text>
          </View>
        </View>
        <Text style={{ color: "gray", paddingTop: 12 }}>
          Date added 05-12-2002 Last updated 3 hours ago.{" "}
        </Text>
      </View>
      <View
        style={{
          padding: 16,
          backgroundColor: "white",
          marginTop: 12,
        }}
      >
        <Text style={{ fontWeight: "700" }}>Features & Amenities</Text>

        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            gap: 8,
            paddingTop: 12,
          }}
        >
          <View style={styles.wrap}>
            <Text style={{ fontWeight: "200", fontSize: 12 }}>Residential</Text>
          </View>
          <View style={styles.wrap}>
            <Text style={{ fontWeight: "200", fontSize: 12 }}>Furnished</Text>
          </View>
          <View style={styles.wrap}>
            <Text style={{ fontWeight: "200", fontSize: 12 }}>
              Good road accessibility
            </Text>
          </View>
          <View style={styles.wrap}>
            <Text style={{ fontWeight: "200", fontSize: 12 }}>Security</Text>
          </View>
          <View style={styles.wrap}>
            <Text style={{ fontWeight: "200", fontSize: 12 }}>
              All Room Ensuite
            </Text>
          </View>
          <View style={styles.wrap}>
            <Text style={{ fontWeight: "200", fontSize: 12 }}>
              24hrs Electricity
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          padding: 16,
          backgroundColor: "white",
          marginTop: 12,
        }}
      >
        <Text style={{ fontWeight: "700", paddingBottom: 8 }}>
          Full Description
        </Text>
        <Text style={{ fontWeight: "100" }}>
          Modern luxury 4 and 5 bedroom Twin Duplex with a BQ and Generator
          house, well finished with modern facilities, Good for hotels, Schools,
          Hospitals, cooperate offices and any decent coommercial activities
        </Text>
        <Text style={{ paddingTop: 12, fontWeight: "300" }}>
          Location: Francis Okediji Old Bodija, 6M respectively p.a
        </Text>
      </View>
      <View
        style={{
          padding: 16,
          backgroundColor: "white",
          marginTop: 12,
        }}
      >
        <View
          style={{ backgroundColor: "#eeeeee", padding: 16, borderRadius: 8 }}
        >
          <Text style={{ fontWeight: "600" }}>Contact agent</Text>
          <Text style={{ paddingTop: 6 }}>
            Please inspect or verify this property and confirm other necessary
            details before making payment.{" "}
          </Text>
          <View
            style={{
              borderRadius: 8,
              borderColor: "lightgray",
              borderWidth: 1,
              padding: 16,
              marginTop: 16,
            }}
          >
            <Text style={{ fontWeight: "600" }}>Timilehin Afolayan</Text>
            <Text style={{ fontSize: 12, fontWeight: "200" }}>
              This agent has not been verified. Proceed with caution.
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 12,
                paddingTop: 12,
              }}
            >
              <View
                style={{
                  backgroundColor: "cyan",
                  width: 120,
                  height: 48,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8,
                  gap: 8,
                }}
              >
                <Ionicons name="call-outline" size={24} color="white" />

                <Text style={{ fontWeight: "200", color: "white" }}>Call</Text>
              </View>

              <View
                style={{
                  backgroundColor: "lightcyan",

                  width: 120,
                  height: 48,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8,
                  gap: 8,
                }}
              >
                <FontAwesome name="whatsapp" size={24} color="black" />
                <Text style={{ fontWeight: "200" }}> Whatsapp</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          padding: 16,
          backgroundColor: "white",
          marginTop: 12,
        }}
      >
        <View
          style={{ backgroundColor: "#eeeeee", padding: 16, borderRadius: 8 }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 18,
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="home-search-outline"
              size={32}
              color="black"
            />
            <Text style={{ fontSize: 16, fontWeight: "700" }}>
              Inspect Property
            </Text>
          </View>
          <Text style={{ paddingTop: 12, paddingBottom: 16 }}>
            Would you like to make a request to inspect this property
          </Text>
          <TouchableOpacity style={styles.button} onPress={openModal}>
            <Text style={{ color: "white" }}>Inspect</Text>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
          >
            <InspectForm closeModal={closeModal} />
          </Modal>
        </View>
        <View style={{ padding: 8 }} />

        <View
          style={{ backgroundColor: "#eeeeee", padding: 16, borderRadius: 8 }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 18,
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="home-search-outline"
              size={32}
              color="black"
            />
            <Text style={{ fontSize: 16, fontWeight: "700" }}>
              Verify Property
            </Text>
          </View>
          <Text
            style={{ paddingTop: 12, paddingBottom: 16, fontWeight: "200" }}
          >
            Would you like to verify the features of this property?
          </Text>
          <TouchableOpacity style={styles.button} onPress={openModal2}>
            <Text style={{ color: "white", fontWeight: "200" }}>Verify</Text>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible2}
            onRequestClose={closeModal2}
          >
            <VerifyForm closeModal2={closeModal2} />
          </Modal>
        </View>
      </View>
      <View
        style={{
          padding: 16,
          backgroundColor: "white",
          marginTop: 12,
        }}
      >
        <Text style={{ fontWeight: "800", paddingBottom: 12 }}>
          Related Property
        </Text>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardComponent item={item} />}
        />
      </View>
    </ScrollView>
  );
};

export default PropertyDetails;

const styles = StyleSheet.create({
  swipercontainer: {
    height: 250,
    width: "100%",
    position: "relative",
  },
  swiper: { display: "flex" },

  wrap: {
    borderWidth: 1,
    borderColor: "lightgray",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
    gap: 4,
  },
  button: {
    backgroundColor: "cyan",
    height: 38,
    width: 120,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    margin: 6,
    width: 245,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: "cover",
  },
  textContainer: {
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    marginTop: 5,
    color: "purple",
  },
});
