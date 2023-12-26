import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import PrimaryButton from '../components/PrimaryButton'

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.

  const handleClick = () => {
    navigation.navigate('Subscribe');
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/little-lemon-logo.png")}
          accessible={true}
          accessibilityLabel="Little Lemon Logo"
          style={styles.imageStyle}
        />
      </View>
      <Text style={styles.text} numberOfLines={2}>
        Little Lemon, your local {"\n"} Mediterranean Bistro
      </Text>
      <PrimaryButton onPress={handleClick}>Newsletter</PrimaryButton>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 24,
  },
  imageContainer: {
    width: 220,
    height: 220,
    marginBottom: 48
  },
  imageStyle: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 220
  },
});
