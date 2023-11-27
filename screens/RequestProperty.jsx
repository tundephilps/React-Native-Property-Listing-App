import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";

const countries = [
  { name: "Nigeria", code: "NG", states: ["Lagos", "Abuja", "Rivers"] },
  {
    name: "Canada",
    code: "CA",
    states: ["Ontario", "Quebec", "British Columbia"],
  },
  // Add more countries and their states as needed
];

const localGovernments = {
  Lagos: ["Alimosho", "Lagos Island", "Ojoo"],
  Abuja: ["Asokoro", "Wuse", "Maitama"],
  Rivers: ["Houston", "Austin", "Dallas"],
  Ontario: ["Toronto", "Ottawa", "Mississauga"],
  Quebec: ["Montreal", "Quebec City", "Laval"],
  "British Columbia": ["Vancouver", "Victoria", "Surrey"],
  // Add more local governments as needed
};

const priceRanges = [
  { label: "Select Price Range", value: "" },
  { label: "N100,000 - N500,000", value: "100k-500k" },
  { label: "N500,000 - N1,000,000", value: "500k-1m" },
  { label: "N1,000,000 - N5,000,000", value: "1m-5m" },
  // Add more ranges as needed
];

const propertyTypes = [
  { label: "Select Property Type", value: "" },
  { label: "Self Contain", value: "self_contain" },
  { label: "Mini Flat", value: "mini_flat" },
  { label: "Apartment", value: "apartment" },
  { label: "Semi Detached Bungalow", value: "semi_detached_bungalow" },
  { label: "Detached Bungalow", value: "detached_bungalow" },
  { label: "Duplex", value: "duplex" },
  { label: "Co-working Space", value: "coworking_space" },
  { label: "Office Space", value: "office_space" },
  { label: "Shop", value: "shop" },
  { label: "Warehouse", value: "warehouse" },
  { label: "Land", value: "land" },
  { label: "Studio Apartment", value: "studio_apartment" },
  { label: "Penthouse", value: "penthouse" },
  // Add more types as needed
];

const Drawer = createDrawerNavigator();
const RequestProperty = ({ navigation }) => {
  const [count, setCount] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedLocalGovernment, setSelectedLocalGovernment] = useState("");
  const [selectedRequestType, setSelectedRequestType] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedPropertyType, setSelectedPropertyType] = useState("");

  const handleStateChange = (itemValue) => {
    setSelectedState(itemValue);
    setSelectedLocalGovernment("");
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <ScrollView>
        <View
          style={{
            backgroundColor: "cyan",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 14,
            flexDirection: "row",
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
            <TouchableOpacity>
              <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>
            <Text style={{ fontWeight: "200", color: "white", fontSize: 18 }}>
              Request Property
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Image
                style={{ height: 42, width: 42 }}
                source={require("../assets/menu1.png")}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ padding: 20, gap: 12 }}>
          <Text style={{ color: "gray" }}>First Name</Text>
          <TextInput
            placeholder="Enter First Name"
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
            style={styles.input}
          />

          <Text style={{ color: "gray" }}>Last Name</Text>
          <TextInput
            placeholder="Enter Last Name"
            value={lastName}
            onChangeText={(text) => setLastName(text)}
            style={styles.input}
          />

          <Text style={{ color: "gray" }}>Email Address</Text>
          <TextInput
            placeholder="Enter Email"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />

          <Text style={{ color: "gray" }}>Phone Number</Text>
          <TextInput
            placeholder="Enter Phone Number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
            style={styles.input}
          />
          <View>
            <Text style={{ paddingBottom: 10, color: "gray" }}>Country</Text>
            <View style={styles.picker}>
              <Picker
                selectedValue={selectedCountry}
                onValueChange={(itemValue) => setSelectedCountry(itemValue)}
                style={styles.input}
              >
                <Picker.Item label="Select Country" value="" color="gray" />
                {countries.map((country) => (
                  <Picker.Item
                    key={country.code}
                    label={country.name}
                    value={country.name}
                    color="gray"
                  />
                ))}
              </Picker>
            </View>
            {selectedCountry !== "" && (
              <>
                <Text style={{ color: "gray", paddingTop: 12 }}>State</Text>
                <Picker
                  selectedValue={selectedState}
                  onValueChange={handleStateChange}
                  color="gray"
                >
                  <Picker.Item label="Select State" value="" color="gray" />
                  {countries
                    .find((country) => country.name === selectedCountry)
                    ?.states.map((state) => (
                      <Picker.Item
                        key={state}
                        label={state}
                        value={state}
                        color="gray"
                      />
                    ))}
                </Picker>

                {selectedState !== "" && (
                  <>
                    <Text style={{ color: "gray", paddingTop: 12 }}>
                      Local Government
                    </Text>
                    <Picker
                      selectedValue={selectedLocalGovernment}
                      onValueChange={(itemValue) =>
                        setSelectedLocalGovernment(itemValue)
                      }
                    >
                      <Picker.Item
                        label="Select Local Government"
                        value=""
                        color="gray"
                      />
                      {localGovernments[selectedState].map((lg, index) => (
                        <Picker.Item
                          key={index}
                          label={lg}
                          value={lg}
                          color="gray"
                        />
                      ))}
                    </Picker>
                  </>
                )}
              </>
            )}
          </View>

          <View>
            <Text style={{ paddingBottom: 10, color: "gray" }}>
              Request Type
            </Text>
            <View style={styles.picker}>
              <Picker
                selectedValue={selectedRequestType}
                onValueChange={(itemValue) => setSelectedRequestType(itemValue)}
                style={styles.input}
              >
                <Picker.Item label="Select Request Type" value="" />
                <Picker.Item label="Buy" value="buy" />
                <Picker.Item label="Rent" value="rent" />
                <Picker.Item label="Shortlet" value="shortlet" />
              </Picker>
            </View>
          </View>
          <View>
            <Text style={{ paddingBottom: 10, color: "gray" }}>
              Price Range
            </Text>
            <View style={styles.picker}>
              <Picker
                selectedValue={selectedPriceRange}
                onValueChange={(itemValue) => setSelectedPriceRange(itemValue)}
                style={styles.input}
              >
                {priceRanges.map((range, index) => (
                  <Picker.Item
                    key={index}
                    label={range.label}
                    value={range.value}
                  />
                ))}
              </Picker>
            </View>
          </View>

          <View>
            <Text style={{ paddingBottom: 10, color: "gray" }}>
              Property Type
            </Text>
            <View style={styles.picker}>
              <Picker
                selectedValue={selectedPropertyType}
                onValueChange={(itemValue) =>
                  setSelectedPropertyType(itemValue)
                }
              >
                {propertyTypes.map((type, index) => (
                  <Picker.Item
                    key={index}
                    label={type.label}
                    value={type.value}
                  />
                ))}
              </Picker>
            </View>
          </View>

          {/* Counter */}
          <View
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={decrement}>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 60,
                  height: 50,
                  borderColor: "lightgray",
                  borderWidth: 1,
                  borderTopLeftRadius: 12,
                  borderBottomLeftRadius: 12,
                }}
              >
                <AntDesign name="minus" size={16} color="black" />
              </View>
            </TouchableOpacity>

            <View
              style={{
                width: 180,
                height: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",

                borderColor: "lightgray",
                borderWidth: 1,
                paddingHorizontal: 20,
              }}
            >
              <Text>Beds</Text>
              <Text>{count}</Text>
            </View>
            <TouchableOpacity onPress={increment}>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  width: 60,
                  height: 50,
                  borderColor: "lightgray",
                  borderWidth: 1,
                  borderTopRightRadius: 12,
                  borderBottomRightRadius: 12,
                }}
              >
                <AntDesign name="plus" size={16} color="black" />
              </View>
            </TouchableOpacity>
          </View>
          {/* Text Input */}
          <View>
            <Text style={{ paddingBottom: 10, color: "gray" }}>
              Additional Data
            </Text>
            <View
              style={{
                borderColor: "lightgray",
                borderWidth: 1,
              }}
            >
              <TextInput
                editable
                multiline
                numberOfLines={12}
                maxLength={40}
                style={{ padding: 1, height: 100 }}
              />
            </View>
          </View>

          {/* Button */}
          <TouchableOpacity
            onPress={() => {
              /* handle onPress */
            }}
          >
            <View
              style={{
                backgroundColor: "cyan", // Background color
                marginTop: 6, // Margin top
                paddingVertical: 16,
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
                Submit
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RequestProperty;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "lightgray",
    height: 55,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  picker: {
    borderWidth: 1,
    borderColor: "lightgray",
    height: 55,
    borderRadius: 8,
  },
});
