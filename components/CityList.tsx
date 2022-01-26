import { FlatList, Text, View, TouchableHighlight } from "react-native";
import React, { useEffect, useState } from "react";

//interfaces
import { sortData } from "../interfaces/sortData";
import { cityPop } from "../interfaces/cityPop";
//styles
import { styles } from "../styles/CityListStyles";

const CityList = ({
  data,
  setCityPop,
}: {
  data: any;
  setCityPop: (cityPop: cityPop | null) => void;
}) => {
  console.log(data);
  const [cities, setCities] = useState([]);

  // The city list sort function
  const sortCities = (arr: []) => {
    return arr.sort((a: sortData, b: sortData) => b.population - a.population);
  };

  // watches for changes in the data, when it does it puts the sortcities() inside the setCities() and displays the sorted array on the list
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
        <TouchableHighlight onPress={() => setCityPop(item)}>
          <View
            style={[
              isEven(index + 1) ? styles.even : styles.unEven,
              styles.container,
            ]}
          >
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.number}>{index + 1}</Text>
          </View>
        </TouchableHighlight>
      )}
    ></FlatList>
  );
};

export default CityList;
