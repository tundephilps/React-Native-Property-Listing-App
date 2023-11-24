import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import FeatherIcon from "react-native-vector-icons/Feather";
import React from "react";

const Search = () => {
  return (
    <View>
      <TextInput
        placeholder="Search a location e.g Lagos"
        placeholderTextColor="#9695b0"
        style={styles.searchInput}
      />
      <View style={styles.searchFloating}>
        <TouchableOpacity>
          <View style={styles.searchButton}>
            <FeatherIcon name="search" size={20} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchInput: {
    height: 56,
    backgroundColor: "#f8f8f8",
    paddingHorizontal: 16,
    color: "#1a2525",
    fontSize: 18,

    borderRadius: 9999,
  },
  searchFloating: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  searchButton: {
    alignSelf: "center",
    width: 44,
    height: 44,
    borderRadius: 9999,
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
    alignItems: "center",
  },
});
