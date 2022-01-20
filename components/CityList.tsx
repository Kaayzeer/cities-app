import { StyledFlatList, StyledText } from "../styles/CityListStyles";

import { sortData } from "../interfaces/sortData";
import React, { useEffect, useState } from "react";

const CityList = (/* { data: any, setCityPop: any } */) => {
  return (
    <StyledFlatList
      keyExtractor={() => }
      data={}
      renderItem={({}) => {
        return <StyledText>{}</StyledText>;
      }}
    ></StyledFlatList>
  );
};

export default CityList;
