import { SafeAreaView, Text, TextInput, ActivityIndicator } from "react-native";
// icons
import { Ionicons } from "@expo/vector-icons";
// styles
import { styles } from "../styles/FormStyles";

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
  isLoading,
}: Props) {
  const handleChange = (e: string) => {
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
        <Text style={styles.text}>
          {isCountry ? "search country" : "search city"}
        </Text>
        <TextInput
          onChangeText={handleChange}
          style={styles.input}
          value={inputValue}
          placeholder="search"
        />

        {!isLoading ? (
          <Ionicons.Button
            name="search"
            borderRadius={50}
            size={30}
            color="#302720"
            backgroundColor="#fefefe"
            onPressOut={handleSubmit}
          ></Ionicons.Button>
        ) : (
          <ActivityIndicator
            size="small"
            color="#302720"
            style={styles.loading}
          />
        )}
      </SafeAreaView>
    </>
  );
}
