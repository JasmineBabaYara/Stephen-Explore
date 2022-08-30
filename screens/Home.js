import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Home({ navigation }) {
  {
    /* flatlist data */
  }
  const teams = [
    {
      id: 1,
      name1: "Chelsea",
      name2: "Man city",
      time: "07:30",
      date: "31 OCT",
      location: "Emirates Stadium, London",
    },
    {
      id: 2,
      name1: "Arsenal",
      name2: "Brentford",
      time: "07:30",
      date: "31 OCT",
      location: "Emirates Stadium, London",
    },
    {
      id: 3,
      name1: "Aston Villa",
      name2: "Man city",
      time: "07:30",
      date: "31 OCT",
      location: "Emirates Stadium, London",
    },
    {
      id: 4,
      name1: "Chelsea",
      name2: "Liverpool",
      time: "07:30",
      date: "31 OCT",
      location: "Emirates Stadium, London",
    },
    {
      id: 5,
      name1: "Man United",
      name2: "Man city",
      time: "07:30",
      date: "31 OCT",
      location: "Emirates Stadium, London",
    },
    {
      id: 6,
      name1: "Chelsea",
      name2: "Brentford",
      time: "07:30",
      date: "31 OCT",
      location: "Emirates Stadium, London",
    },
  ];

  {
    /* teams information beginning */
  }
  function renderTeams() {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            marginTop: 40,
            padding: 20,
            marginVertical: -18,
            justifyContent: "center",
            width: "100%",
            alignSelf: "center",
            borderRadius: 25,
            ...styles.shadow,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginTop: -20,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "500" }}>
              {item.name1}
            </Text>
            <View
              style={{
                justifyContent: "space-evenly",
                height: 70,
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 11, fontWeight: "bold", color: "red" }}>
                {item.time}
              </Text>
              <Text style={{ fontSize: 12, color: "grey" }}>{item.date}</Text>
            </View>
            <Text style={{ fontSize: 15, fontWeight: "500" }}>
              {item.name2}
            </Text>
          </View>
          <Text style={{ fontSize: 13, alignSelf: "center" }}>
            {item.location}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <FlatList
        data={teams}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: 30,
          paddingBottom: 40,
        }}
      />
    );
  }
  {
    /* header information end */
  }

  {
    /* header information beginning */
  }
  const renderHeader = () => {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "55%",
            alignItems: "center",
            marginLeft: 25,
            marginTop: 10,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={34} color="black" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
            }}
          >
            Matchs
          </Text>
        </View>
        <View
          style={{
            marginTop: 25,
            backgroundColor: "lightgrey",
            height: 50,
            padding: 10,
            justifyContent: "center",
            width: "80%",
            alignSelf: "center",
            borderRadius: 25,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "yellow",
              height: 40,
              padding: 8,
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              borderRadius: 25,
            }}
            onPress={() => navigation.navigate("Information")}
          >
            <Text style={{ color: "blue", fontSize: 18, fontWeight: "600" }}>
              Information
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  {
    /* header information end */
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderTeams()}
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

  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});
