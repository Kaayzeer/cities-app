import { useState, useEffect } from "react";
// hooks
import { useFetch } from "../hooks/useFetch";
//components
import Form from "../components/Form";
import CityPopulation from "../components/CityPopulation";
// interfaces
import { cityPop } from "../interfaces/cityPop";
//styles
import { StyledPage } from "../styles/CityCountryStyles";

export default function City() {
  return (
    <StyledPage /* style={{searchCity ? "showPop" : ""}} */>
      <Form />
    </StyledPage>
  );
}
