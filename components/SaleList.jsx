import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const CardComponent = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("PropertyDetails")}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.description}</Text>
        <Text style={styles.description}>{item.price}</Text>
        <Text style={{ fontWeight: "200" }}>{item.address}</Text>
      </View>
    </TouchableOpacity>
  );
};

const SaleList = () => {
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

  return (
    <View style={styles.container}>
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
            Properties On Sale
          </Text>

          <Text style={{ fontWeight: "200" }}>
            High-Quality Homes and Properties For Sale
          </Text>
        </View>
        <View>
          <AntDesign name="arrowright" size={24} color="black" />
        </View>
      </View>

      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardComponent item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default SaleList;
