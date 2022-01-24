import { View, Text } from "react-native";
import { StyleSheetManager } from "styled-components";

// styles
import { styles } from "../styles/CityPopStyles";

const CityPopulation = (props: any) => {
  let convertedPop =
    props.population > 1000000
      ? (Math.abs(Number(props.population)) / 1.0e6).toFixed(2) + "M"
      : (Math.abs(Number(props.population)) / 1.0e3).toFixed(2) + "K";

  return (
    <View style={styles.container}>
      <Text style={styles.textH3}>{props.name}</Text>
      <Text style={styles.textP}>{convertedPop}</Text>
    </View>
  );
};

export default CityPopulation;
