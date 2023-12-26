import {useState} from "react";
import { View, Text, Image, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from '../components/PrimaryButton'
import {validateEmail } from '../utils/index'

const SubscribeScreen = () => {
  // Add subscribe screen code here
  const [email, setEmail] = useState('')

  const handleClick = () => {
    if (validateEmail(email)){
      Alert.alert('', 'Thanks for subscribing,\n stay tuned! ', [ {text: 'OK'} ])
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/little-lemon-logo-grey.png")}
          accesible={true}
          accessibilityLabel="Little Lemon Logo"
          style={styles.image}
        />
      </View>
      <Text style={styles.text} numberOfLines={2}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Type your email"
        keyboardType="email-address"
      />
      <PrimaryButton onPress={handleClick} inactive={!validateEmail(email)}>Subscribe</PrimaryButton>
    </View>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 24,
    paddingHorizontal: 32,
    gap: 18
  },
  imageContainer: {
    width: 100,
    height: 100,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  text: {
    fontSize: 22,
    textAlign: "center",
  },
  input: {
    fontSize: 18,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    width: '100%'
  }
});
