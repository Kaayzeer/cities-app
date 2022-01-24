/* // icons
import { RiSearch2Line } from "react-icons/ri"; */
// styles
import { SafeAreaView, Text, TextInput } from "react-native";

import { styles } from "../styles/FormStyles";

import { Ionicons } from "@expo/vector-icons";

type Props = {
  handleSubmit: () => void;
  setInput: (input: string) => void;
  isLoading: boolean;
  isCountry: boolean;
  inputValue: string;
};

export default function Form({
  handleSubmit,
  setInput,
  isCountry,
  inputValue,
}: Props) {
  const handleChange = (e: any) => {
    console.log(e);
    let value = e;
    value = value.replace(/[^A-Öa-ö ]/gi, "");
    let trimmedValue = value.trim();

    if (trimmedValue.length > 0 && trimmedValue.length <= 20) {
      setInput(value);
    } else setInput("");
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Search for a city</Text>
        <TextInput
          onChangeText={handleChange}
          style={styles.input}
          value={inputValue}
          placeholder="search"
          /* placeholderTextColor="black" */
        />

        <Ionicons.Button
          name="search"
          borderRadius={50}
          size={30}
          color="#302720"
          backgroundColor="#fefefe" /* onPress={} */
          onPressOut={handleSubmit}
        ></Ionicons.Button>
      </SafeAreaView>
    </>
  );
}
