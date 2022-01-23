import { View } from "react-native";
import { useState, useEffect } from "react";

// hooks
import { useFetch } from "../hooks/useFetch";
//components
import Form from "../components/Form";
import CityPopulation from "../components/CityPopulation";
// interfaces
import { cityPop } from "../interfaces/cityPop";
//styles
import { styles } from "../styles/CityCountryStyles";

export default function City() {
  return (
    <View style={styles.container} /* style={{searchCity ? "showPop" : ""}} */>
      <Form />
    </View>
  );
}
