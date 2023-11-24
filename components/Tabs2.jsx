import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Text,
  SafeAreaView,
} from "react-native";

const tabs = [{ name: "Rent" }, { name: "Buy" }, { name: "Shortlet" }];

export default function Tabs2() {
  const [value, setValue] = React.useState(0);

  return (
    <View style={styles.container}>
      {tabs.map((item, index) => {
        const isActive = index === value;

        return (
          <View key={item.name} style={{ flex: 1 }}>
            <TouchableWithoutFeedback
              onPress={() => {
                setValue(index);
              }}
            >
              <View
                style={[styles.item, isActive && { backgroundColor: "cyan" }]}
              >
                <Text style={[styles.text, isActive && { color: "gray" }]}>
                  {item.name}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 4,
    borderRadius: 20,
    gap: 6,
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "lightcyan",
    borderRadius: 20,
  },
  text: {
    fontSize: 13,
    fontWeight: "600",
    color: "black",
  },
});
