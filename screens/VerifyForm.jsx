import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";

import PhoneInput from "react-native-phone-number-input";
import { Ionicons } from "@expo/vector-icons";

const VerifyForm = ({ closeModal2 }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstQuestion, setFirstQuestion] = useState("");

  const [secondQuestion, setSecondQuestion] = useState("");

  return (
    <ScrollView style={{ height: "100%", backgroundColor: "white" }}>
      <View style={{ padding: 16 }}>
        <View
          style={{
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <TouchableOpacity onPress={closeModal2}>
            <Ionicons name="md-close-circle-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 19 }}>
            Verification Form
          </Text>
          <Text style={{ textAlign: "left" }}>
            Please provide us with some further information on your buying
            criteria.
          </Text>
        </View>

        <View style={{ display: "flex", gap: 12, paddingTop: 28 }}>
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

          <PhoneInput
            defaultValue={phoneNumber}
            defaultCode="NG"
            layout="first"
            // placeholder="Enter Phone Number"
            // keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
            containerStyle={styles.PhoneInput}
            textContainerStyle={{ backgroundColor: "white" }}
          />
          <View style={{ display: "flex", gap: 4, paddingTop: 12 }}>
            <Text style={{ color: "gray" }}>What are your must haves?</Text>
            <TextInput
              placeholder="Seperate items with comma"
              value={firstQuestion}
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
            />
            <Text style={{ color: "gray" }}>
              i.e What do you need in your place?
            </Text>
          </View>

          <View style={{ display: "flex", gap: 4, paddingTop: 12 }}>
            <Text style={{ color: "gray" }}>What are your deal breakers?</Text>
            <TextInput
              placeholder="Seperate items with comma"
              value={firstQuestion}
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
            />
            <Text style={{ color: "gray" }}>i.e Things you do not want</Text>
          </View>
          <View style={{ padding: 20 }} />
          <View
            style={{
              backgroundColor: "lightblue",
              padding: 16,
              borderRadius: 8,
            }}
          >
            <Text>
              We'll get back to you within 2-3 days of receiving your payment
            </Text>
          </View>

          <View style={{ padding: 20 }} />
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
                borderRadius: 99,
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
                Request
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default VerifyForm;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "lightgray",
    height: 55,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  PhoneInput: {
    borderWidth: 1,
    borderColor: "lightgray",
    height: 55,
    borderRadius: 8,
    width: "100%",
    backgroundColor: "white",
  },
});
