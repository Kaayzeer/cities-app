import { View, Text } from "react-native";
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
  const [cityInput, setcityInput] = useState<string>("");
  const [cityPopul, setCityPopul] = useState<string>("");
  const [searchCity, setSearchCity] = useState<cityPop | null>(null);

  const cityApi = `http://api.geonames.org/searchJSON?q=${cityInput}&cities=cities1000&maxRows=1&orderby=relevance&featureCode=PPLC&featureCode=PPLA&featureCode=PPL&username=weknowit`;

  const { fetchedData, isLoading, error } = useFetch(cityPopul, true);

  useEffect(() => {
    if (fetchedData) {
      let { name, population } = fetchedData.geonames[0];
      setSearchCity({ name, population });
    }
  }, [fetchedData]);

  const handleSubmit = () => {
    setCityPopul(cityApi);
    setcityInput("");
  };

  return (
    <View style={styles.container}>
      <Form
        setInput={setcityInput}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        isCountry={false}
        inputValue={cityInput}
      />

      {/* {!searchCity && (
        <Form
          setInput={setcityInput}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
          isCountry={false}
          inputValue={cityInput}
        />
      )} */}
      {searchCity && (
        <CityPopulation
          name={searchCity!.name}
          population={searchCity!.population}
        />
      )}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}
