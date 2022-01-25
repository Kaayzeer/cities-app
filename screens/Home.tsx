import { View, ImageBackground, TouchableOpacity, Text } from "react-native";
//styles
import { styles } from "../styles/HomeStyles";

const image = require("../assets/native_background.png");

export default function Home({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageWrapper} source={image}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("City")}
        >
          <Text style={styles.text}> Go To City </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Country")}
        >
          <Text style={styles.text}> Go To Country</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
