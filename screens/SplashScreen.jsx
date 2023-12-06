import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";

import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Homepage"); // Replace 'MainScreen' with your actual screen name
    }, 3000); // 5000 milliseconds (5 seconds)

    return () => clearTimeout(timer); // Clear the timeout if the component unmounts before 5 seconds
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{ height: 40 }}
          source={require("../assets/logo.webp")}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
});
