import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function home() {
  const { email } = useLocalSearchParams();
  const [selectedTrip, setSelectedTrip] = useState<"round" | "one" | "multi">(
    "round",
  );
  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <View style={styles.row}>
          <View style={styles.textWrap}>
            <Text style={styles.text}>Hello, {email}</Text>
            <Text style={styles.text2}>Book your next flight</Text>
          </View>
          <Image
            source={require("@/assets/images/pp.jpg")}
            style={styles.gambarProfile}
          />
        </View>
        <View style={styles.tripSelector}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedTrip === "round" && styles.activeTabButton,
            ]}
            onPress={() => setSelectedTrip("round")}
          >
            <Text
              style={[
                styles.tabText,
                selectedTrip === "round" && styles.activeTabText,
              ]}
            >
              Round Trip
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedTrip === "one" && styles.activeTabButton,
            ]}
            onPress={() => setSelectedTrip("one")}
          >
            <Text
              style={[
                styles.tabText,
                selectedTrip === "one" && styles.activeTabText,
              ]}
            >
              One way
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedTrip === "multi" && styles.activeTabButton,
            ]}
            onPress={() => setSelectedTrip("multi")}
          >
            <Text
              style={[
                styles.tabText,
                selectedTrip === "multi" && styles.activeTabText,
              ]}
            >
              Multi city
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0E9B6",
  },
  hero: {
    backgroundColor: "#744577",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#F2EAE0",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  textWrap: {
    flexDirection: "column",
  },
  text: {
    marginTop: 20,
    color: "#ffffff",
  },
  text2: {
    marginVertical: 10,
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  gambarProfile: {
    width: 40,
    height: 40,
    backgroundColor: "#ccc",
    borderRadius: 20,
  },
  tripSelector: {
    flexDirection: "row",
    backgroundColor: "#F2EAE0",
    borderRadius: 20,
    padding: 4,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 21,
  },
  activeTabButton: { backgroundColor: "#744577" },
  tabText: { color: "#744577", fontWeight: "600" },
  activeTabText: { color: "#fff" },
});
