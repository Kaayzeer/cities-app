import "react-native-safe-area-context";
import * as React from "react";
import Home from "./screens/Home";
import City from "./screens/City";
import Country from "./screens/Country";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const citypop = require("./assets/citypop.png");

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="City Pop" component={Home} />
        <Stack.Screen name="City" component={City} />
        <Stack.Screen name="Country" component={Country} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
