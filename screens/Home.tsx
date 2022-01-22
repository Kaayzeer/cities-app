const image = require("../img/native_background.png");
import {
  StyledHome,
  StyledImage,
  StyledButton,
  StyledText,
} from "../styles/HomeStyles";
/* background-image: url(${}); */
export default function Home({ navigation }: { navigation: any }) {
  return (
    <StyledHome>
      <StyledImage source={image}>
        <StyledButton onPress={() => navigation.navigate("city")}>
          <StyledText> Go To City </StyledText>
        </StyledButton>
        <StyledButton onPress={() => navigation.navigate("country")}>
          <StyledText> Go To Country</StyledText>
        </StyledButton>
      </StyledImage>
    </StyledHome>
  );
}
