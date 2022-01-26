import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginVertical: "20%",
    marginHorizontal: "15%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5e8dd",
    borderColor: "#302720",
    borderWidth: 1,
    borderRadius: 6,
    height: 150,
  },
  textH3: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 30,
  },
  textP: {
    fontSize: 30,
    color: "#7b6959",
  },
});

/* import styled from "styled-components";

export const PopulationStyle = styled.div`
  margin: 0 auto;
  display: grid;
  place-items: center;
  color: #fcf9f9;
  border: 1px solid #fcf9f9;
  border-radius: 0.6rem;
  font-size: 5rem;
  padding: 2rem 5rem;
  height: 18rem;
  text-transform: uppercase;

  h3 {
    font-weight: bolder;
  }

  p {
    font-size: 2.4rem;
    color: #dfdede;
  }
`; */
