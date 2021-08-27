import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.logStyle}> Log in</Text>
      <View>
        <TextInput style={styles.inputSet} placeholder="Username" />
        <TextInput style={styles.inputSet} placeholder="Password" />
      </View>

      <Text style={styles.passForg} >Forgot password?</Text>

      <View style={styles.buttonBox}>
        <Text style={styles.buttonText}>Log in</Text>
      </View>

      <View style={styles.noAcc}>
      <Text>Don't have an account?</Text>
      <Text style={styles.signUp}>Sign up</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 60

  },
  logStyle: {
    color: "#813e9f",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 80,
    marginBottom: 80,
  },
  inputSet: {
    borderBottomWidth: 2,
    borderBottomColor: "#813e9f",
    marginVertical: 20
  },
  passForg: {
    textAlign: "right",
    color: "blue",
    marginBottom: 80
  },
  buttonBox: {
    width: 260,
    height: 60,
    borderRadius:12,
    padding: 10,
    alignSelf:"center",
    backgroundColor: "#813e9f",
  },
  buttonText: {
    color: "#ffff",
    textAlign: "center",
    padding: 10,
    fontSize: 20
  },
  noAcc: {
    marginTop: 50,
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  signUp: {
    marginLeft: 10,
    color: "#813e9f"
  }

});
