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
  const [countryInput, setCountryInput] = useState<string>(""); // inputfield value
  const [countryCode, setCountryCode] = useState<string | null>(null); // state for country query manipulation
  const [cityList, setCityList] = useState<string>(""); // state for country api on submit
  const [cityPop, setCityPop] = useState<cityPop | null>(null); // callback in the citylist

  const countryApi = `http://api.geonames.org/searchJSON?q=${countryInput}&cities=cities1000&maxRows=1&orderby=relevance&featureCode=PPLC&featureCode=PPLA&featureCode=PPL&username=weknowit`;

  const countryCodeApi = `http://api.geonames.org/searchJSON?country=${countryCode}&cities=cities1000&maxRows=10&orderby=relevance&featureCode=PPLC&featureCode=PPLA&featureCode=PPL&username=weknowit`;

  const { fetchedData, isLoading, error } = useFetch(cityList, false);

  const { fetchedData: data } = useFetch(countryCodeApi, false);

  useEffect(() => {
    if (fetchedData) {
      setCountryCode(fetchedData.geonames[0].countryCode);
    }
  }, [fetchedData]);

  const handleSubmit = () => {
    setCityList(countryApi);
    setCountryInput("");
  };
  return (
    <View style={styles.container} /* className={cityPop ? "showPop" : ""} */>
      <Form
        setInput={setCountryInput}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        isCountry={false}
        inputValue={countryInput}
      />

      {countryCode && <CityList data={data!} setCityPop={setCityPop} />}
    </View>
  );
}
