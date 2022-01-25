import { FlatList, Text, View } from "react-native";
import { styles } from "../styles/CityListStyles";

import { sortData } from "../interfaces/sortData";
import React, { useEffect, useState, FC } from "react";
import { Fetch, GeoNames } from "../interfaces/Geonames";

type Props = {
  data: Fetch;
};

const CityList = ({ data, setCityPop }: { data: any; setCityPop: string }) => {
  console.log(data);
  const [cities, setCities] = useState([]);

  const sortCities = (arr: []) => {
    return arr.sort((a: sortData, b: sortData) => b.population - a.population);
  }; // The city list sort function

  useEffect(() => {
    if (data) {
      setCities(sortCities(data.geonames));
    }
  }, [data]);

  const isEven = (num: number) => {
    return num % 2 === 0;
  };

  return (
    <FlatList
      keyExtractor={(cities, index) => index.toString()}
      data={cities}
      renderItem={({ item, index }: { item: any; index: number }) => (
        <View
          style={[
            isEven(index + 1) ? styles.even : styles.unEven,
            styles.container,
          ]}
        >
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.number}>{index + 1}</Text>
        </View>
      )}
    ></FlatList>
  );
};

export default CityList;
