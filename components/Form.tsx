/* // icons
import { RiSearch2Line } from "react-icons/ri"; */
// styles

import {
  FormContainer,
  StyledTextInput,
  StyledText,
} from "../styles/FormStyles";

import { Ionicons } from "@expo/vector-icons";

export default function Form({}) {
  const handleChange = (e: any) => {
    console.log(e);
    /*     let value = e;
    value = value.replace(/[^A-Öa-ö ]/gi, "");
    let trimmedValue = value.trim();

    if (trimmedValue.length > 0 && trimmedValue.length <= 20) {
      setInput(value);
    } else setInput(""); */
  };

  return (
    <>
      <FormContainer>
        <StyledText>Search for a city</StyledText>
        <StyledTextInput
          onChangeText={handleChange}
          /* value={inputValue} */
          placeholder="Search"
        />

        <Ionicons.Button
          name="search"
          borderRadius={50}
          size={40}
          color="white"
          backgroundColor="#010101" /* onPress={} */
        ></Ionicons.Button>
      </FormContainer>
    </>
  );
}
