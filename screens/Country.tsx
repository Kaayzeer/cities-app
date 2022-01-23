import { View } from "react-native";
import React, { useEffect, useState } from "react";
// components
import Form from "../components/Form";
import CityList from "../components/CityList";
import CityPopulation from "../components/CityPopulation";
// hooks
import { useFetch } from "../hooks/useFetch";
// interfaces
import { cityPop } from "../interfaces/cityPop";
// styles
import { styles } from "../styles/CityCountryStyles";

export default function Country() {
  return (
    <View style={styles.container} /* className={cityPop ? "showPop" : ""} */>
      <Form />
    </View>
  );
}
