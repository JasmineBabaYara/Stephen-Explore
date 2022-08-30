import React from "react";
import {
  SafeAreaView,
  Text,
  ImageBackground,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import welcome from "../assets/images/welcome.jpeg";

export default function Welcomer({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={welcome} style={styles.imagebg}>
        {/* beginning of bottom text */}
        <View style={styles.body}>
          <View style={styles.bodysection}>
            <Text style={styles.bodytxt}>Explore</Text>
            <Text style={styles.bodytxt2}>the world</Text>
          </View>

          {/* beginning of bottom button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.buttontxt}>Get started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
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

  imagebg: {
    height: "100%",
    width: "100%",
  },

  body: {
    position: "absolute",
    bottom: "12%",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  bodysection: {
    alignItems: "center",
    justifyContent: "center",
  },

  bodytxt: {
    color: "#fff",
    fontSize: 60,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  bodytxt2: {
    color: "#fff",
    fontSize: 60,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  button: {
    backgroundColor: "#fff",
    marginTop: "10%",
    height: "30%",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    borderRadius: 18,
  },

  buttontxt: {
    color: "darkturquoise",
    fontSize: 30,
    fontWeight: "500",
  },
});
