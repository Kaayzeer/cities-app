const image = require("../img/city_pop_bg.png");
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
