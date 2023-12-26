import { Pressable, Text, StyleSheet } from "react-native";

const PrimaryButton = ({ onPress, children, inactive }) => {
  return (
    <Pressable
      style={[styles.button, inactive ? styles.inactiveButton : null]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    padding: 12,
    backgroundColor: "#3e524b",
    borderRadius: 12,
    width: "100%",
  },
  inactiveButton: {
    backgroundColor: "#cecece",
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
  },
});
