import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Drawer } from "react-native-paper";

const App: React.FC = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const [active, setActive] = React.useState("");

  const toggleDrawer = () => {
    setIsDrawerVisible(!isDrawerVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Text>Hey</Text>
      </TouchableOpacity>
      <Drawer.Section
      // visible={isDrawerVisible}
      // onDismiss={() => setIsDrawerVisible(false)}
      >
        <View style={{ width: 200, backgroundColor: "black" }}></View>
        <Drawer.Item
          label="Second Item"
          active={active === "second"}
          onPress={() => setActive("second")}
        />
      </Drawer.Section>
    </View>
  );
};

export default App;
