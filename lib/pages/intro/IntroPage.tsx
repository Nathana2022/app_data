import React from "react";
import { Image, StyleSheet } from "react-native";
import { Text, TouchableOpacity, View } from "react-native";

const IntroPage = (): React.JSX.Element => {
  return (
    <View style={styles.parent}>
        <Text style={styles.textTitle}>Somba Na Tshombo</Text>
      <Image style={styles.logo} source={require("../../../images/icon.png")} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Continuer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center", // Centrer horizontalement
    alignItems: "center", // Centrer verticalement
    padding: 30
  },
  logo: {
    height: 250,
    width: 250
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },
  button: {
    backgroundColor: "",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: 100
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black"
  }
});

export default IntroPage;
