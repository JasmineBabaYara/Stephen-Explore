import React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function Information() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.hey}>Hey,</Text>
      <Text style={styles.login}>Login Now.</Text>
      <View style={styles.section}>
        <Text style={styles.sectiontxt}>If you are new / </Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 22, fontWeight: "500" }}>Create New</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.agencyinput}>
        <TextInput
          placeholder="Dstudio_agency"
          placeholderTextColor={"black"}
          style={{ outline: "none" }}
        />
        <TouchableOpacity
          style={{ backgroundColor: "#fff", padding: 10, borderRadius: 25 }}
        >
          <Entypo name="pin" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.passwordinput}>
        <TextInput
          placeholder="Password"
          placeholderTextColor={"dimgrey"}
          style={{ outline: "none" }}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectiontxt}>Forgot Passcode?/ </Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 22, fontWeight: "500" }}>Reset</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginbtn}>
        <Text style={styles.logintxt}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

{
  /* stylesheet */
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    width: "100%",
  },

  hey: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: "40%",
    marginLeft: 50,
  },

  login: {
    fontSize: 40,
    fontWeight: "bold",
    marginLeft: 50,
  },

  section: {
    marginLeft: 50,
    flexDirection: "row",
    marginTop: 30,
  },

  sectiontxt: {
    color: "grey",
    fontSize: 20,
  },

  agencyinput: {
    width: "80%",
    padding: 20,
    backgroundColor: "navajowhite",
    marginTop: 50,
    alignSelf: "center",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  passwordinput: {
    width: "80%",
    padding: 30,
    backgroundColor: "lightgrey",
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 10,
  },

  loginbtn: {
    width: "80%",
    padding: 20,
    backgroundColor: "firebrick",
    marginTop: "23%",
    alignSelf: "center",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  logintxt: {
    color: "#fff",
    fontSize: 30,
  },
});
