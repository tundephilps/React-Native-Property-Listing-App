import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
//import { View } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import PhoneInput from "react-native-phone-number-input";
import { Feather } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SafeAreaProvider } from "react-native-safe-area-context";

const InspectForm = ({ closeModal }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState("");

  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [formattedTime, setFormattedTime] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (event, date) => {
    hideDatePicker();
    if (date) {
      setSelectedDate(date);
      // Format the date to your desired format
      const formatted = date.toLocaleDateString(); // Modify this line to format the date as needed
      setFormattedDate(formatted);
    }
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (event, time) => {
    hideTimePicker();
    if (time) {
      setSelectedTime(time);
      // Format the time to your desired format
      const formatted = time.toLocaleTimeString(); // Modify this line to format the time as needed
      setFormattedTime(formatted);
    }
  };

  return (
    <SafeAreaProvider>
      <View style={{ height: "100%", backgroundColor: "white" }}>
        <ScrollView style={{ padding: 16 }}>
          <View
            style={{
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <TouchableOpacity onPress={closeModal}>
              <Ionicons
                name="md-close-circle-outline"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 19 }}>
              Inspect Form
            </Text>
            <Text style={{ textAlign: "center" }}>
              A mordern and tastefully built 4-Bedroom terrace duplex with
              mordern facilities in Akobo, Ibadan local government of Oyo ID:
              BLLP-729975
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

            <Text style={{ color: "gray" }}>Phone Number</Text>
            <PhoneInput
              defaultValue={phoneNumber}
              defaultCode="NG"
              layout="first"
              withShadow
              autoFocus
              // placeholder="Enter Phone Number"
              // keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
              containerStyle={styles.PhoneInput}
              textContainerStyle={{ backgroundColor: "white" }}
            />

            <TouchableOpacity
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderColor: "lightgray",
                height: 55,
                borderRadius: 8,
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 12,
              }}
              onPress={showDatePicker}
            >
              <View>
                <TextInput
                  style={{ fontWeight: "200", color: "black" }}
                  placeholder="Prefered Date"
                  value={formattedDate}
                  editable={false}
                />
              </View>
              <View>
                <Feather name="calendar" size={24} color="black" />
              </View>
            </TouchableOpacity>
            {isDatePickerVisible && (
              <View>
                {Platform.OS === "ios" ? (
                  <DateTimePicker
                    value={selectedDate}
                    mode="date"
                    display="default"
                    onChange={handleConfirm}
                  />
                ) : (
                  <DateTimePicker
                    value={selectedDate}
                    mode="date"
                    display="default"
                    onChange={handleConfirm}
                  />
                )}
              </View>
            )}

            <View>
              <TouchableOpacity
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: "lightgray",
                  height: 55,
                  borderRadius: 8,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 12,
                }}
                onPress={showTimePicker}
              >
                <TextInput
                  style={{ fontWeight: "200", color: "black" }}
                  placeholder="Preferred Time"
                  value={formattedTime}
                  editable={false}
                />
                <Feather name="clock" size={24} color="black" />
              </TouchableOpacity>

              {isTimePickerVisible && (
                <View>
                  {Platform.OS === "ios" ? (
                    <DateTimePicker
                      value={selectedTime}
                      mode="time"
                      display="spinner"
                      onChange={handleTimeConfirm}
                    />
                  ) : (
                    <DateTimePicker
                      value={selectedTime}
                      mode="time"
                      display="clock"
                      onChange={handleTimeConfirm}
                    />
                  )}
                </View>
              )}
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

            <View style={{ padding: 20 }} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
};

export default InspectForm;

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
