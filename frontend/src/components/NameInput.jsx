import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, HelperText } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";

const NameInput = ({ name, setName, error, isValid }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        label="Name"
        value={name}
        style={styles.input}
        onChangeText={setName}
        autoCapitalize="none"
        error={!!error}
      />
      <HelperText type="error" visible={!!error}>
        {error}
      </HelperText>
      <View style={styles.iconContainer}>
        {isValid && <Icon name="checkmark-circle" size={20} color="green" />}
        <Icon name="person" size={20} style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    position: "relative",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "white",
  },
  iconContainer: {
    position: "absolute",
    right: 15,
    top: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: 5,
  },
});

export default NameInput;